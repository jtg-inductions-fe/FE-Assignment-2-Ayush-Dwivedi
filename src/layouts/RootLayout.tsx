import { useState } from 'react';

import { Outlet } from 'react-router';

import { Grid2 as Grid, useMediaQuery } from '@mui/material';

import { Footer, Sidebar } from '@components';
import {
    FOOTER_LINKS,
    HEADER_HEIGHT,
    SIDEBAR_BOTTOM_LINKS,
    SIDEBAR_LIST,
    SIDEBAR_WIDTH,
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
                            navItems={SIDEBAR_LIST}
                            bottomControls={SIDEBAR_BOTTOM_LINKS}
                        />
                    </Grid>
                )}
                <Grid
                    size="grow"
                    padding={4}
                    display="flex"
                    flexDirection="column"
                    gap={4}
                >
                    <main>
                        <Outlet />
                    </main>
                    {!hideFooter && <Footer socialLinks={FOOTER_LINKS} />}
                </Grid>
            </Grid>
        </Grid>
    );
};
