import { CustomButton } from '@/common/components/Button'
import { Card } from '@/common/components/Card'
import { Divider } from '@/common/components/Divider'
import { InfoTooltip } from '@/common/components/InfoTooltip'
import { TableRow } from '@/common/components/TableRow'
import { useIsMobile } from '@/common/hooks/useIsMobile'
import { Home, Paid, Wallet } from '@mui/icons-material'
import { FC } from 'react'
import style from '../common/styles/main-page.module.scss'
import { BalanceCard } from './components/BalanceCard'

export const TestPage: FC = () => {
  const isMobile = useIsMobile()

  // Add date
  const dataExample = [
    { description: 'Test 1', value: 'R$0.80', operation: 'Saída' },
    { description: 'Test 2', value: 'R$0.80', operation: 'Saída' },
    { description: 'Test 333333 AAAAAAAAAAAAAAAAAA', value: 'R$0.80', operation: 'Saída' },
    { description: 'Test 2', value: 'R$0.80', operation: 'Saída' },
    { description: 'Test 333333 AAAAAAAAAAAAAAAAAA', value: 'R$0.80', operation: 'Saída' },
  ]

  return (
    <div className={style.mainContainer}>
      <title>Test</title>

      <header className={style.header}>
        <div className={style.titleContainer}>
          <Wallet fontSize="large" />
          <h1>Carteira Digital</h1>
        </div>

        <div className={style.buttonsContainer}>
          <CustomButton icon={<Home sx={{ color: 'var(--colors-primary-light)' }} />} label="Home" />
          <CustomButton icon={<Paid sx={{ color: 'var(--colors-primary-light)' }} />} label="Movimentações" />
        </div>
      </header>

      <div className={style.container}>
        <div className={style.card}>
          <Card>
            <div className={style.title}>
              <h3>Últimas Movimentações</h3>
              <InfoTooltip content="Mostra as últimas cinco (05) movimentações inseridas para o mês vigente" />
            </div>

            <Divider />

            <TableRow fontWeight={600} labels={['Descrição', 'Valor', 'Operação']} />

            <div>
              {dataExample.map((data) => (
                <TableRow labels={Object.values(data)} slotProps={{ cell: { allowTooltip: true } }} />
              ))}
            </div>
          </Card>

          <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
            <BalanceCard
              current="Junho - 2025"
              currentValue={500}
              next="Julho - 2025"
              nextValue={650}
              tooltip="Balanço - Banco"
            />
            <BalanceCard
              current="Junho - 2025"
              currentValue={250}
              next="Julho - 2025"
              nextValue={300}
              tooltip="Balanço - Vale"
            />
          </div>
        </div>

        <Card height="100%" justifyContent="center" alignItems="center">
          Em Breve!
        </Card>
      </div>
    </div>
  )
}
