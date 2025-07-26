import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { routes } from '@router';
import { theme } from '@theme';

const rootElement = document.getElementById('root') as HTMLElement;
const router = createBrowserRouter(routes);

createRoot(rootElement).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>,
);
