import { Outlet } from 'react-router-dom';

export const RootLayout = () => (
    <>
        <header>Header</header>
        <main>
            <Outlet />
        </main>
        <footer>Footer</footer>
    </>
);
