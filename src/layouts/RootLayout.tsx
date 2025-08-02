import { useState } from 'react';

import { Outlet } from 'react-router';

import { Grid2 as Grid } from '@mui/material';

import { Sidebar } from '@components';
import { HEADER_HEIGHT, SIDEBAR_WIDTH } from '@constant';
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
export const RootLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);
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
                <Grid sx={{ width: { md: SIDEBAR_WIDTH } }}>
                    <Sidebar
                        isSidebarOpen={isSidebarOpen}
                        handleSidebarToggle={handleSidebarToggle}
                    />
                </Grid>
                <Grid size="grow">
                    <main>
                        <Outlet />
                    </main>
                    <footer>Footer</footer>
                </Grid>
            </Grid>
        </Grid>
    );
};
