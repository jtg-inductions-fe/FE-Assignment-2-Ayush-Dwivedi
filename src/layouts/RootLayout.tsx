import { useState } from 'react';

import { Outlet } from 'react-router';

import { Sidebar } from '@components';
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
        <>
            <Header onSidebarToggle={handleSidebarToggle} />
            <Sidebar open={isSidebarOpen} />
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </>
    );
};
