import { useState, useCallback, useRef } from 'react'
import { Toast, ToastType, ToastOptions, ToastPosition } from '../types/toast'

/**
 * Hook para gerenciar notificações toast
 */
export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])
  const timeoutRefs = useRef<Map<string, NodeJS.Timeout>>(new Map())

  // Função para gerar ID único
  const generateId = () => `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

  // Função para adicionar toast
  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = generateId()
    const newToast: Toast = {
      id,
      duration: 5000,
      position: 'top-right',
      ...toast,
    }

    setToasts(prev => [...prev, newToast])

    // Auto-remover toast após a duração especificada
    if (newToast.duration && newToast.duration > 0) {
      const timeout = setTimeout(() => {
        removeToast(id)
      }, newToast.duration)

      timeoutRefs.current.set(id, timeout)
    }

    return id
  }, [])

  // Função para remover toast
  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
    
    // Limpar timeout se existir
    const timeout = timeoutRefs.current.get(id)
    if (timeout) {
      clearTimeout(timeout)
      timeoutRefs.current.delete(id)
    }
  }, [])

  // Função para limpar todos os toasts
  const clearAllToasts = useCallback(() => {
    // Limpar todos os timeouts
    timeoutRefs.current.forEach(timeout => clearTimeout(timeout))
    timeoutRefs.current.clear()
    
    setToasts([])
  }, [])

  // Funções de conveniência para cada tipo
  const success = useCallback((title: string, message?: string, options?: ToastOptions) => {
    return addToast({
      type: 'success',
      title,
      message,
      ...options,
    })
  }, [addToast])

  const error = useCallback((title: string, message?: string, options?: ToastOptions) => {
    return addToast({
      type: 'error',
      title,
      message,
      ...options,
    })
  }, [addToast])

  const warning = useCallback((title: string, message?: string, options?: ToastOptions) => {
    return addToast({
      type: 'warning',
      title,
      message,
      ...options,
    })
  }, [addToast])

  const info = useCallback((title: string, message?: string, options?: ToastOptions) => {
    return addToast({
      type: 'info',
      title,
      message,
      ...options,
    })
  }, [addToast])

  return {
    toasts,
    addToast,
    removeToast,
    clearAllToasts,
    success,
    error,
    warning,
    info,
  }
}
