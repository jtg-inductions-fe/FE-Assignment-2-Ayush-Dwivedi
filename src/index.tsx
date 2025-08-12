import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { ErrorBoundary, Fallback } from '@components';
import { ERROR_PAGE_CONFIG } from '@constant';
import { routes } from '@router';
import { theme } from '@theme';

const rootElement = document.getElementById('root') as HTMLElement;
const router = createBrowserRouter(routes);

createRoot(rootElement).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <ErrorBoundary fallback={<Fallback {...ERROR_PAGE_CONFIG} />}>
                <CssBaseline />
                <RouterProvider router={router} />
            </ErrorBoundary>
        </ThemeProvider>
    </StrictMode>,
);
