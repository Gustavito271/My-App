/**
 * Tipos e interfaces para o sistema de notificações toast
 */

export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface Toast {
  id: string
  type: ToastType
  title: string
  message?: string
  duration?: number
  position?: ToastPosition
  action?: ToastAction
  icon?: React.ReactNode
}

export interface ToastAction {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
}

export type ToastPosition = 
  | 'top-left'
  | 'top-center' 
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

export interface ToastOptions {
  duration?: number
  position?: ToastPosition
  action?: ToastAction
  icon?: React.ReactNode
}

export interface ToastContextType {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, 'id'>) => string
  removeToast: (id: string) => void
  clearAllToasts: () => void
  success: (title: string, message?: string, options?: ToastOptions) => string
  error: (title: string, message?: string, options?: ToastOptions) => string
  warning: (title: string, message?: string, options?: ToastOptions) => string
  info: (title: string, message?: string, options?: ToastOptions) => string
}
