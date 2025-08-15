import { describe, expect, it } from 'vitest';

import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SectionWrapper } from './SectionWrapper.component';

describe('SectionWrapper component', () => {
    const MOCK_DATA = {
        title: 'Abc',
        subtitle: 'Xyz',
        infoTooltip: 'Extra details here',
        id: 'section-id',
    };
    const user = userEvent.setup();

    it('should render the component without subtitle and tooltip', () => {
        const { getByRole, queryByText } = render(
            <SectionWrapper title={MOCK_DATA.title} id="X" />,
        );

        // Section wrapper is rendered properly
        const sectionElement = getByRole('region', { name: MOCK_DATA.title });
        expect(sectionElement).toBeInTheDocument();

        // Assertion to check title is rendered correctly
        expect(
            within(sectionElement).getByRole('heading', {
                name: MOCK_DATA.title,
            }),
        ).toBeInTheDocument();

        // Assertion to check subtitle is not rendered when not passed
        expect(queryByText(MOCK_DATA.subtitle)).not.toBeInTheDocument();
    });

    it('should render the component with subtitle', () => {
        const { getByText } = render(
            <SectionWrapper
                title={MOCK_DATA.title}
                subtitle={MOCK_DATA.subtitle}
                id="X"
            />,
        );

        expect(getByText(MOCK_DATA.subtitle)).toBeInTheDocument();
    });

    it('should render the component with tooltip and its content', async () => {
        const { getByLabelText, findByText } = render(
            <SectionWrapper {...MOCK_DATA} />,
        );

        // Assertion on Tooltip is rendered properly
        const tooltipButton = getByLabelText(
            `More info about ${MOCK_DATA.title}`,
        );
        expect(tooltipButton).toBeInTheDocument();

        // Tooltip text displays correctly on hover
        await user.hover(tooltipButton);
        expect(await findByText(MOCK_DATA.infoTooltip)).toBeInTheDocument();
    });

    it('should render children of the component', () => {
        const { getByRole } = render(
            <SectionWrapper {...MOCK_DATA}>
                <div>Child element</div>
            </SectionWrapper>,
        );

        // Assertion on Child is rendered properly
        const sectionElement = getByRole('region', { name: MOCK_DATA.title });
        expect(
            within(sectionElement).queryByText('Child element'),
        ).toBeInTheDocument();
    });
});
