import { Info } from '@mui/icons-material'
import { FC } from 'react'

interface InfoTooltipProps {
  content: string
}

export const InfoTooltip: FC<InfoTooltipProps> = ({ content }) => {
  return (
    <div title={content}>
      <Info sx={{ color: 'var(--colors-primary-dark)' }} />
    </div>
  )
}
