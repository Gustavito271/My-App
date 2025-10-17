/**
 * Constantes de tema e cores da aplicação
 */

export const COLORS = {
  // Cores primárias
  primary: {
    main: '#1976d2',
    light: '#42a5f5',
    dark: '#1565c0',
  },
  
  // Cores secundárias
  secondary: {
    main: '#dc004e',
    light: '#ff5983',
    dark: '#9a0036',
  },
  
  // Cores de status
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
  
  // Cores neutras
  background: {
    default: '#ffffff',
    paper: '#f8fafc',
    card: '#ffffff',
  },
  
  text: {
    primary: '#1f2937',
    secondary: '#6b7280',
    contrast: '#ffffff',
  },
  
  // Cores de borda e sombra
  border: {
    light: '#e5e7eb',
    medium: '#d1d5db',
    dark: '#9ca3af',
  },
  
  shadow: 'rgba(0, 0, 0, 0.1)',
} as const

export const SPACING = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '3rem',
} as const

export const BORDER_RADIUS = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  full: '9999px',
} as const

export const TYPOGRAPHY = {
  fontFamily: {
    primary: 'Montserrat, sans-serif',
    secondary: 'Roboto, sans-serif',
    display: 'Big Shoulders Text, sans-serif',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xxl: '1.5rem',
    xxxl: '2rem',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const
