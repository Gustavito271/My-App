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
import { StatsCard } from './components/StatsCard'
import { UserPreferences } from './components/UserPreferences'

export const TestPage: FC = () => {
  const isMobile = useIsMobile()

  // Dados de exemplo para movimentações
  const dataExample = [
    { description: 'Test 1', value: 'R$0.80', operation: 'Saída' },
    { description: 'Test 2', value: 'R$0.80', operation: 'Saída' },
    { description: 'Test 333333 AAAAAAAAAAAAAAAAAA', value: 'R$0.80', operation: 'Saída' },
    { description: 'Test 2', value: 'R$0.80', operation: 'Saída' },
    { description: 'Test 333333 AAAAAAAAAAAAAAAAAA', value: 'R$0.80', operation: 'Saída' },
  ]

  // Dados de exemplo para estatísticas do mês
  const monthlyStats = {
    income: 2500.00,
    expense: 1800.50,
    balance: 699.50,
    incomeGrowth: 12.5,
    expenseGrowth: -3.2
  }

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

      {/* Seção de Estatísticas */}
      <div className={style.statsSection}>
        <h2 className={style.statsTitle}>Resumo do Mês</h2>
        <div className={style.statsGrid}>
          <StatsCard
            title="Receitas"
            value={monthlyStats.income}
            type="income"
            percentage={monthlyStats.incomeGrowth}
          />
          <StatsCard
            title="Despesas"
            value={monthlyStats.expense}
            type="expense"
            percentage={monthlyStats.expenseGrowth}
          />
          <StatsCard
            title="Saldo Líquido"
            value={monthlyStats.balance}
            type="balance"
          />
        </div>
      </div>

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

        <UserPreferences 
          onThemeChange={(theme) => console.log('Tema alterado:', theme)}
          onCurrencyChange={(currency) => console.log('Moeda alterada:', currency)}
        />
      </div>
    </div>
  )
}
