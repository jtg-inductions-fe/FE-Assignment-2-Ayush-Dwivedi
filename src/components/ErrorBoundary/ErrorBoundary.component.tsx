import React from 'react';

import { ErrorBoundaryContext } from '@contexts';

import type {
    ErrorBoundaryProps,
    ErrorBoundaryState,
} from './ErrorBoundary.types';

/**
 * ErrorBoundary component
 * Extends React.component to catch errors from children
 * @component
 *
 * @example usage
 * ```tsx
 * <ErrorBoundary>{children}</ErrorBoundary>
 * ```
 */
export class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    static defaultProps = {
        fallback: <h1>Something went wrong</h1>,
    };

    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    resetErrorBoundary = () => {
        this.setState({ hasError: false });
    };

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        return (
            <ErrorBoundaryContext.Provider
                value={{ resetErrorBoundary: this.resetErrorBoundary }}
            >
                {this.state.hasError
                    ? this.props.fallback
                    : this.props.children}
            </ErrorBoundaryContext.Provider>
        );
    }
}
