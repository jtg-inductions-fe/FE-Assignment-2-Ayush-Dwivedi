import { RouteObject } from 'react-router-dom';

import { RootLayout } from '@layouts/RootLayout';

/**
 * Application route configuration using nested routes.
 * RootLayout wraps all routes and renders children via <Outlet />.
 */
export const routes: RouteObject[] = [
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <h1>Dashboard</h1>,
            },
            {
                path: '*',
                element: <h1>404 Not Found</h1>,
            },
        ],
    },
];
