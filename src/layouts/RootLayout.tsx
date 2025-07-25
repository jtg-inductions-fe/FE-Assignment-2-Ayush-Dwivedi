import { Outlet } from 'react-router-dom';

/** App root layout with nested route outlet */
export const RootLayout = () => (
    <>
        <header>Header</header>
        <main>
            <Outlet />
        </main>
        <footer>Footer</footer>
    </>
);
