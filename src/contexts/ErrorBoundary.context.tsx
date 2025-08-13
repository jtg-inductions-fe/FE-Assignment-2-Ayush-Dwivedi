import { createContext, useContext } from 'react';

type ErrorBoundaryContextType = {
    resetErrorBoundary: () => void;
};

export const ErrorBoundaryContext = createContext<ErrorBoundaryContextType>({
    resetErrorBoundary: () => {},
});

export const useErrorBoundaryContext = () => {
    const context = useContext(ErrorBoundaryContext);
    if (context === undefined)
        throw new Error(
            'ErrorBoundaryContext used outside of ErrorBoundaryContextProvider',
        );

    return context;
};
