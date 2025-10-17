import { Card } from '@/common/components/Card'
import { formatCurrency } from '@/common/utils/currency'
import { isValidNumber, isValidString, isValidStatsType } from '@/common/utils/validation'
import { FC } from 'react'
import { TrendingUp, TrendingDown, AccountBalance } from '@mui/icons-material'
import style from '../styles/stats-card.module.scss'

interface StatsCardProps {
  title: string
  value: number
  type: 'income' | 'expense' | 'balance'
  percentage?: number
  icon?: React.ReactNode
}

export const StatsCard: FC<StatsCardProps> = ({ title, value, type, percentage, icon }) => {
  // Validação de props
  if (!isValidString(title)) {
    console.warn('StatsCard: title deve ser uma string não vazia')
    return null
  }

  if (!isValidNumber(value)) {
    console.warn('StatsCard: value deve ser um número válido')
    return null
  }

  if (!isValidStatsType(type)) {
    console.warn('StatsCard: type deve ser "income", "expense" ou "balance"')
    return null
  }

  if (percentage !== undefined && !isValidNumber(percentage)) {
    console.warn('StatsCard: percentage deve ser um número válido')
    return null
  }

  const getIcon = () => {
    if (icon) return icon
    
    switch (type) {
      case 'income':
        return <TrendingUp className={style.icon} />
      case 'expense':
        return <TrendingDown className={style.icon} />
      case 'balance':
        return <AccountBalance className={style.icon} />
      default:
        return null
    }
  }

  const getValueColor = () => {
    switch (type) {
      case 'income':
        return style.positive
      case 'expense':
        return style.negative
      case 'balance':
        return value >= 0 ? style.positive : style.negative
      default:
        return ''
    }
  }

  const formatValue = (val: number) => {
    return formatCurrency(val)
  }

  return (
    <Card width="fit-content" minWidth="200px">
      <div className={style.header}>
        <div className={style.iconContainer}>
          {getIcon()}
        </div>
        <h4 className={style.title}>{title}</h4>
      </div>
      
      <div className={style.content}>
        <p className={`${style.value} ${getValueColor()}`}>
          {formatValue(value)}
        </p>
        {percentage !== undefined && (
          <p className={`${style.percentage} ${percentage >= 0 ? style.positive : style.negative}`}>
            {percentage >= 0 ? '+' : ''}{percentage.toFixed(1)}%
          </p>
        )}
      </div>
    </Card>
  )
}
