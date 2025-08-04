import { useState } from 'react';

import { Outlet } from 'react-router';

import { Grid2 as Grid, useMediaQuery } from '@mui/material';

import { Sidebar } from '@components';
import {
    HEADER_HEIGHT,
    SIDEBAR_WIDTH,
    sidebarBottomLinks,
    sidebarList,
} from '@constant';
import { Header } from '@containers';

/**
 * RootLayout component
 * Provides the main application layout structure with a header, main content area (using React Router's Outlet for nested routes), and a footer.
 * @component
 *
 * @example usage
 * ```tsx
 * <Route path="/" element={<RootLayout />}>
 *  ...
 * </Route>
 * ```
 */
export const RootLayout = ({
    hideSidebar,
    hideFooter,
}: {
    hideSidebar?: boolean;
    hideFooter?: boolean;
}) => {
    const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const handleSidebarToggle = () => {
        setSidebarOpen((prev) => !prev);
    };

    return (
        <Grid height="100vh">
            <Grid size={12} height={HEADER_HEIGHT}>
                <Header
                    isSidebarOpen={isSidebarOpen}
                    onSidebarToggle={handleSidebarToggle}
                />
            </Grid>
            <Grid container direction="row">
                {!(hideSidebar && isDesktop) && (
                    <Grid sx={{ width: { md: SIDEBAR_WIDTH } }}>
                        <Sidebar
                            isSidebarOpen={isSidebarOpen}
                            handleSidebarToggle={handleSidebarToggle}
                            navItems={sidebarList}
                            bottomControls={sidebarBottomLinks}
                        />
                    </Grid>
                )}
                <Grid size="grow">
                    <main>
                        <Outlet />
                    </main>
                    {!hideFooter && <footer>Footer</footer>}
                </Grid>
            </Grid>
        </Grid>
    );
};
