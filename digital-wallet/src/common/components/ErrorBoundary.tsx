import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary capturou um erro:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div style={{
          padding: '1rem',
          border: '1px solid var(--colors-error)',
          borderRadius: 'var(--border-radius-md)',
          backgroundColor: '#fef2f2',
          color: 'var(--colors-error)',
          textAlign: 'center'
        }}>
          <h3>Algo deu errado!</h3>
          <p>Ocorreu um erro inesperado. Tente recarregar a página.</p>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details style={{ marginTop: '1rem', textAlign: 'left' }}>
              <summary>Detalhes do erro (desenvolvimento)</summary>
              <pre style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
                {this.state.error.toString()}
              </pre>
            </details>
          )}
        </div>
      )
    }

    return this.props.children
  }
}
