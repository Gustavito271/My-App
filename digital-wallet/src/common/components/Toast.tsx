import { FC, useEffect, useState } from 'react'
import { CheckCircle, Error, Warning, Info, X } from '@mui/icons-material'
import { Toast as ToastType } from '../types/toast'
import style from './toast.module.scss'

interface ToastProps {
  toast: ToastType
  onRemove: (id: string) => void
}

export const Toast: FC<ToastProps> = ({ toast, onRemove }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    // Animação de entrada
    const timer = setTimeout(() => setIsVisible(true), 10)
    return () => clearTimeout(timer)
  }, [])

  const handleRemove = () => {
    setIsLeaving(true)
    setTimeout(() => onRemove(toast.id), 300)
  }

  const getIcon = () => {
    if (toast.icon) return toast.icon

    const iconProps = { className: style.icon }
    
    switch (toast.type) {
      case 'success':
        return <CheckCircle {...iconProps} />
      case 'error':
        return <Error {...iconProps} />
      case 'warning':
        return <Warning {...iconProps} />
      case 'info':
        return <Info {...iconProps} />
      default:
        return <Info {...iconProps} />
    }
  }

  const getTypeClass = () => {
    return style[`toast_${toast.type}`]
  }

  return (
    <div
      className={`${style.toast} ${getTypeClass()} ${isVisible ? style.visible : ''} ${isLeaving ? style.leaving : ''}`}
      role="alert"
      aria-live="polite"
    >
      <div className={style.content}>
        <div className={style.iconContainer}>
          {getIcon()}
        </div>
        
        <div className={style.text}>
          <h4 className={style.title}>{toast.title}</h4>
          {toast.message && (
            <p className={style.message}>{toast.message}</p>
          )}
        </div>

        <button
          className={style.closeButton}
          onClick={handleRemove}
          aria-label="Fechar notificação"
        >
          <X className={style.closeIcon} />
        </button>
      </div>

      {toast.action && (
        <div className={style.actionContainer}>
          <button
            className={`${style.actionButton} ${style[`action_${toast.action.variant || 'primary'}`]}`}
            onClick={toast.action.onClick}
          >
            {toast.action.label}
          </button>
        </div>
      )}

      {toast.duration && toast.duration > 0 && (
        <div className={style.progressBar}>
          <div 
            className={style.progressFill}
            style={{
              animationDuration: `${toast.duration}ms`,
            }}
          />
        </div>
      )}
    </div>
  )
}
