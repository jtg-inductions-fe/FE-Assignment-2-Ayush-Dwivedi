import { createContext, useContext } from 'react';

type ErrorBoundaryContextType = {
    resetErrorBoundary: () => void;
};

export const ErrorBoundaryContext = createContext<
    ErrorBoundaryContextType | undefined
>(undefined);
ErrorBoundaryContext.displayName = 'ErrorBoundaryContext';

/**
 * Access the ErrorBoundary context. Throws if used outside the provider.
 * Typically provided by <ErrorBoundary> wrapping the routed tree.
 */
export const useErrorBoundaryContext = (): ErrorBoundaryContextType => {
    const context = useContext(ErrorBoundaryContext);
    if (context === undefined)
        throw new Error(
            'ErrorBoundaryContext must be used within ErrorBoundaryContext.Provider',
        );

    return context;
};
