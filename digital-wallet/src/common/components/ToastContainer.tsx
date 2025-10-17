import { FC } from 'react'
import { Toast } from './Toast'
import { Toast as ToastType } from '../types/toast'
import style from './toast-container.module.scss'

interface ToastContainerProps {
  toasts: ToastType[]
  onRemove: (id: string) => void
  position?: ToastType['position']
}

export const ToastContainer: FC<ToastContainerProps> = ({ 
  toasts, 
  onRemove, 
  position = 'top-right' 
}) => {
  if (toasts.length === 0) return null

  const getPositionClass = () => {
    return style[`position_${position.replace('-', '_')}`]
  }

  return (
    <div className={`${style.container} ${getPositionClass()}`}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          toast={toast}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
}
