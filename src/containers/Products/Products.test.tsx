import { describe, expect, it, vi } from 'vitest';

import { render, within } from '@testing-library/react';

vi.mock('@components', async (importOriginal) => {
    const actual = (await importOriginal()) satisfies object;

    return {
        ...actual,
        SectionWrapper: vi.fn((props: SectionWrapperProps) => (
            <section aria-label="Top products" id="mock-section">
                {props.children}
            </section>
        )),
    };
});

vi.mock('@hooks', () => ({
    useGetTopProducts: vi.fn(() => ({
        data: [
            {
                title: 'Apple',
                id: '1',
                techStack: 'React',
                sales: 100,
            },
            {
                title: 'Banana',
                id: '2',
                techStack: 'Next',
                sales: 50,
            },
        ],
    })),
}));

import { type SectionWrapperProps } from '@components';
import { SectionWrapper } from '@components';

import { Products } from './Products.container';

describe('Products Container', () => {
    it('should render top products container with child components', () => {
        const { getByRole } = render(<Products />);
        const productSection = getByRole('region');
        expect(SectionWrapper).toHaveBeenCalledWith(
            expect.objectContaining({
                title: 'Top products',
                id: 'top-products',
                sx: { flexGrow: 1 },
            }),
            undefined,
        );

        // Assertion to check child component is rendered correctly with data
        const titleElement = within(productSection).getByText('Apple');
        expect(titleElement).toBeInTheDocument();

        // Assertion on the separator to be in the section
        const separator = within(productSection).getByRole('separator', {
            hidden: true,
        });
        expect(separator).toBeInTheDocument();
    });
});
