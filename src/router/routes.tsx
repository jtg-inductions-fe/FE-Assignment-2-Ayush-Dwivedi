import { type RouteObject } from 'react-router';

import { RootLayout } from '@layouts';

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
        ],
    },

    {
        path: '/',
        element: <RootLayout hideSidebar={true} hideFooter={true} />,
        children: [
            {
                path: '*',
                element: <h1>404 Not Found</h1>,
            },
        ],
    },
];
