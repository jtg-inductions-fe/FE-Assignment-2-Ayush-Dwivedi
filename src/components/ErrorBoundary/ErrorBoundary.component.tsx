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
        this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
    }

    resetErrorBoundary = () => {
        this.setState({ hasError: false });
    };

    componentDidCatch() {
        // Update state to show the fallback UI
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorBoundaryContext.Provider
                    value={{ resetErrorBoundary: this.resetErrorBoundary }}
                >
                    {this.props.fallback}
                </ErrorBoundaryContext.Provider>
            );
        }

        return (
            <ErrorBoundaryContext.Provider
                value={{ resetErrorBoundary: this.resetErrorBoundary }}
            >
                {this.props.children}
            </ErrorBoundaryContext.Provider>
        );
    }
}
