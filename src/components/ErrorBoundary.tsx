import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Portfolio Error Boundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#FFFAF3] px-6">
          <div className="text-center max-w-md">
            <h1 className="text-6xl font-display font-bold text-[#1B1B1B] mb-4">
              Oops<span className="text-[#F62440]">.</span>
            </h1>
            <p className="text-lg text-[#1B1B1B]/70 font-medium mb-8">
              Something went wrong while loading the portfolio. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-4 bg-[#F62440] text-[#FFFAF3] rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-[#1B1B1B] transition-colors duration-300"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
