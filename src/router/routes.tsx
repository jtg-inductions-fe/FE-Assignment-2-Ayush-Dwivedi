import { type RouteObject } from 'react-router';

import { ErrorBoundary, ErrorScreen } from '@components';
import { RootLayout } from '@layouts';
import { HomePage } from '@pages';

/**
 * Application route configuration using nested routes.
 * RootLayout wraps all routes and renders children via <Outlet />.
 */
export const routes: RouteObject[] = [
    {
        path: '/',
        element: (
            <ErrorBoundary fallback={<ErrorScreen />}>
                <RootLayout />
            </ErrorBoundary>
        ),
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: '*',
                element: <ErrorScreen status={404} />,
            },
        ],
    },
];
