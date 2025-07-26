import { Outlet } from 'react-router';

/**
 * RootLayout component
 *
 * Provides the main application layout structure with a header, main content area (using React Router's Outlet for nested routes), and a footer.
 *
 * @component
 * @example usage
 * ```tsx
 * <Route path="/" element={<RootLayout />}>
 *  ...
 * </Route>
 * ```
 */
export const RootLayout = () => (
    <>
        <header>Header</header>
        <main>
            <Outlet />
        </main>
        <footer>Footer</footer>
    </>
);
