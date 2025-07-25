import { RouteObject } from 'react-router-dom';

import { RootLayout } from '@layouts/RootLayout';

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
