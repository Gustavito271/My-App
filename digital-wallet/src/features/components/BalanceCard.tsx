import { Card } from '@/common/components/Card'
import { Divider } from '@/common/components/Divider'
import { InfoTooltip } from '@/common/components/InfoTooltip'
import { formatCurrency } from '@/common/utils/currency'
import { isValidNumber, isValidString } from '@/common/utils/validation'
import { FC } from 'react'
import style from '../styles/balance-card.module.scss'

interface BalanceCardProps {
  current: string
  currentValue: number
  next: string
  nextValue: number
  tooltip?: string
}

export const BalanceCard: FC<BalanceCardProps> = ({ current, currentValue, next, nextValue, tooltip }) => {
  // Validação de props
  if (!isValidString(current)) {
    console.warn('BalanceCard: current deve ser uma string não vazia')
    return null
  }

  if (!isValidNumber(currentValue)) {
    console.warn('BalanceCard: currentValue deve ser um número válido')
    return null
  }

  if (!isValidString(next)) {
    console.warn('BalanceCard: next deve ser uma string não vazia')
    return null
  }

  if (!isValidNumber(nextValue)) {
    console.warn('BalanceCard: nextValue deve ser um número válido')
    return null
  }

  return (
    <Card width="fit-content">
      <div className={style.container}>
        <p className={style.currentDate}>{current}</p>
        {tooltip && <InfoTooltip content={tooltip} />}
      </div>
      <Divider />
      <p className={style.currentDateBalance}>{formatCurrency(currentValue)}</p>
      <p className={style.nextDate}>{`Próximo mês (${next}): ${formatCurrency(nextValue)}`}</p>
    </Card>
  )
}
