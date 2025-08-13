import { createContext, useContext } from 'react';

type ErrorBoundaryContextType = {
    resetErrorBoundary: () => void;
};

export const ErrorBoundaryContext = createContext<ErrorBoundaryContextType>({
    resetErrorBoundary: () => {},
});

export const useErrorBoundaryContext = () => useContext(ErrorBoundaryContext);
