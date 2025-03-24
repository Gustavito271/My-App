import { CSSProperties, FC, PropsWithChildren } from 'react'

const baseProperties = {
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  border: '0.1rem solid black',
  borderRadius: '0.5rem',
  gap: '1rem',
} as CSSProperties

interface CardProps extends PropsWithChildren, CSSProperties {}

export const Card: FC<CardProps> = ({ children, ...props }) => {
  return <div style={{ ...baseProperties, ...props }}>{children}</div>
}
