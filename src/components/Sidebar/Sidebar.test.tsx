import { MemoryRouter } from 'react-router';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { Logout as MockIcon } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Sidebar } from './Sidebar.component';
import type { SidebarProps } from './Sidebar.types';

vi.mock('@mui/material', async (importOriginal) => {
    const actual = (await importOriginal()) satisfies object;

    return {
        ...actual,
        useMediaQuery: vi.fn(),
    };
});
import { useMediaQuery } from '@mui/material';
describe('Sidebar', () => {
    const MOCKS: SidebarProps = {
        isSidebarOpen: true,
        handleSidebarToggle: vi.fn(),
        navItems: [
            { type: 'listItem', label: 'Dashboard', route: '/dashboard' },
            { type: 'divider' },
        ],
        bottomControls: [{ icon: MockIcon, route: '/logout', label: 'mock' }],
    };

    const user = userEvent.setup();
    afterEach(() => {
        vi.clearAllMocks();
    });

    // Helper wrapper with Theme + Router context
    const renderWithProviders = (ui: React.ReactElement) => {
        const theme = createTheme();

        return render(
            <ThemeProvider theme={theme}>
                <MemoryRouter>{ui}</MemoryRouter>
            </ThemeProvider>,
        );
    };

    it('should render sidebar items and bottom controls in desktop view', async () => {
        vi.mocked(useMediaQuery).mockReturnValue(true);
        const { getByLabelText } = renderWithProviders(<Sidebar {...MOCKS} />);

        // Assertion to check Nav list is rendered properly
        const navUlElement = getByLabelText('sidebar navigation');
        expect(navUlElement).toBeInTheDocument();

        // Assertion to check nav list items are rendered correctly
        const navListItem = within(navUlElement).getByText('Dashboard');
        expect(navListItem).toBeInTheDocument();

        // Assertion to check nav list items are rendered correctly
        const separator = within(navUlElement).getByRole('separator', {
            hidden: true,
        });
        expect(separator).toBeInTheDocument();

        // Assertion to check bottom controls are rendered correctly
        const bottomControl = getByLabelText('sidebar bottom controls');
        expect(bottomControl).toBeInTheDocument();

        // Assertion to check bottom control item is rendered correctly and handles click
        const bottomControlItem = within(bottomControl).getByRole('link');
        expect(bottomControlItem).toBeInTheDocument();
        await user.click(bottomControlItem);
        expect(MOCKS.handleSidebarToggle).toBeCalledTimes(1);
    });

    it('should render sidebar in mobile view', () => {
        vi.mocked(useMediaQuery).mockReturnValue(false);
        const { getByLabelText } = renderWithProviders(<Sidebar {...MOCKS} />);

        // Assertion to check Nav list is rendered properly
        const navUlElement = getByLabelText('sidebar navigation');
        expect(navUlElement).toBeInTheDocument();

        // Assertion to check bottom controls are rendered correctly
        const bottomControl = getByLabelText(MOCKS.bottomControls[0].label);
        expect(bottomControl).toBeInTheDocument();
    });
});
