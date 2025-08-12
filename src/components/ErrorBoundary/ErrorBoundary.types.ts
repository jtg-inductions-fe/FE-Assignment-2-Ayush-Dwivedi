import { type ReactNode } from 'react';

export type ErrorBoundaryProps = {
    /**
     * Fallback to display when error is caught
     */
    fallback?: ReactNode;

    /**
     * Children wrapped up by error boundary to handle errors
     */
    children: ReactNode;
};

export type ErrorBoundaryState = {
    /**
     * Boolean value to keep a check of error on children
     */
    hasError: boolean;
};
