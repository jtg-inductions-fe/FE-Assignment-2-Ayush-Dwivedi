import React from 'react';

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
 * <ErrorBoundary>{children}<ErrorBoundary/>
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

    componentDidCatch() {
        // Update state to show the fallback UI
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}
