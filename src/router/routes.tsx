import { type RouteObject } from 'react-router';

import { Fallback } from '@components';
import { NOT_FOUND_CONFIG } from '@constant';
import { RootLayout } from '@layouts';
import { HomePage } from '@pages';

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
                element: <HomePage />,
            },
        ],
    },

    {
        path: '/',
        element: <RootLayout hideSidebar={true} hideFooter={true} />,
        children: [
            {
                path: '*',
                element: <Fallback {...NOT_FOUND_CONFIG} />,
            },
        ],
    },
];
