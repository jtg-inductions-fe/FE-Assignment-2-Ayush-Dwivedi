import { createContext, useContext } from 'react';

type ErrorBoundaryContextType = {
    resetErrorBoundary: () => void;
};

export const ErrorBoundaryContext = createContext<
    ErrorBoundaryContextType | undefined
>(undefined);
ErrorBoundaryContext.displayName = 'ErrorBoundaryContext';

export const useErrorBoundaryContext = (): ErrorBoundaryContextType => {
    const context = useContext(ErrorBoundaryContext);
    if (context === undefined)
        throw new Error(
            'ErrorBoundaryContext must be used within ErrorBoundaryContext.Provider',
        );

    return context;
};
