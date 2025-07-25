import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from './routes';

/** Sets up the app's routing using react-router with provided route config */
const router = createBrowserRouter(routes);

export const AppRoutes = () => <RouterProvider router={router} />;
