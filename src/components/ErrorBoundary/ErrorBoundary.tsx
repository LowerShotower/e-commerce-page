import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error | null
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info)
    // Log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          Something went wrong. <span>{this.state.error?.message}</span>
        </h1>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
