import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error('An error occurred:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render the error message
      return <h1 className='content'>Error: {this.state.errorMessage}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
