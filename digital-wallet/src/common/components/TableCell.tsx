import { CSSProperties, FC, ReactNode } from 'react'

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
