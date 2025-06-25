import { CSSProperties, FC, PropsWithChildren } from 'react'

const baseProperties = {
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  border: '0.15rem solid var(--colors-secondary-light)',
  borderRadius: '0.5rem',
  gap: '1rem',
  backgroundColor: 'var(--colors-card-background)',
  boxShadow: '0 0.25rem 0.75rem var(--colors-box-shadow)',
} as CSSProperties

interface CardProps extends PropsWithChildren, CSSProperties {}

export const Card: FC<CardProps> = ({ children, ...props }) => {
  return <div style={{ ...baseProperties, ...props }}>{children}</div>
}
