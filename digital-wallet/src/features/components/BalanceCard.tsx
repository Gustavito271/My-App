import { Card } from '@/common/components/Card'
import { Divider } from '@/common/components/Divider'
import { InfoTooltip } from '@/common/components/InfoTooltip'
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
  return (
    <Card width="fit-content">
      <div className={style.container}>
        <p className={style.currentDate}>{current}</p>
        {tooltip && <InfoTooltip content={tooltip} />}
      </div>
      <Divider />
      <p className={style.currentDateBalance}>{`R$${currentValue.toFixed(2)}`}</p>
      <p className={style.nextDate}>{`Próximo mês (${next}): R$${nextValue.toFixed(2)}`}</p>
    </Card>
  )
}
