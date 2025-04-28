import { FC } from 'react'
import style from '../styles/custom-button.module.scss'

interface CustomButtonProps {
  label: string
}

export const CustomButton: FC<CustomButtonProps> = ({ label }) => {
  return <button className={style.button}>{label}</button>
}
