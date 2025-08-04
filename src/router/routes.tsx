import { type RouteObject } from 'react-router';

import { HomeLayout, RootLayout } from '@layouts';

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
                element: <HomeLayout />,
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
