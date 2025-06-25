import { FC, ReactNode } from 'react'
import style from '../styles/custom-button.module.scss'

interface CustomButtonProps {
  icon?: ReactNode
  label: string
}

export const CustomButton: FC<CustomButtonProps> = ({ icon, label }) => {
  return (
    <button className={style.button}>
      {icon}
      {label}
    </button>
  )
}
