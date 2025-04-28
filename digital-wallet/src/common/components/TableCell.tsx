import { CSSProperties, FC, ReactNode } from 'react'

// Move this component to TableRow (and in the future, create a separated component for the table)
// Add filter in header (table) for sort, example.

// We will add a tooltip in each cell. In first step, we will use base property of html component.

interface TableCellProps extends Omit<CSSProperties, 'content'> {
  content: ReactNode
}

export const TableCell: FC<TableCellProps> = ({ content, ...props }) => {
  return (
    <p
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
