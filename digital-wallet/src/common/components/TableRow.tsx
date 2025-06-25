import { CSSProperties, FC, ReactNode } from 'react'

const baseProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
} as CSSProperties

interface TableCellProps extends Omit<CSSProperties, 'content'> {
  content: ReactNode
}

const TableCell: FC<TableCellProps> = ({ content, ...props }) => {
  return (
    <p
      title={typeof content === 'string' ? content : undefined}
      key={`column_${content}`}
      style={{
        width: '10rem',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        ...props,
      }}
    >
      {content}
    </p>
  )
}

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
