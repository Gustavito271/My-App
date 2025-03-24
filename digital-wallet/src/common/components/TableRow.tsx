import { CSSProperties, FC, ReactNode } from 'react'
import { TableCell } from './TableCell'

const baseProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
} as CSSProperties

interface TableRowProps extends CSSProperties {
  labels: ReactNode[]
}

export const TableRow: FC<TableRowProps> = ({ labels, ...props }) => {
  return (
    <div style={baseProperties}>
      {labels.map((label) => (
        <TableCell key={`cell_${crypto.randomUUID()}`} content={label} {...props} />
      ))}
    </div>
  )
}
