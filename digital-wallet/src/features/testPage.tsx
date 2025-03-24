import { Card } from '@/common/components/Card'
import { TableRow } from '@/common/components/TableRow'
import { useIsMobile } from '@/common/hooks/useIsMobile'
import { FC } from 'react'
import style from '../common/styles/main-page.module.scss'

export const TestPage: FC = () => {
  const isMobile = useIsMobile()

  const dataExample = [
    { description: 'Test 1', value: 'R$0.80', operation: 'Saída' },
    { description: 'Test 2', value: 'R$0.80', operation: 'Saída' },
    { description: 'Test 333333 AAAAAAAAAAAAAAAAAA', value: 'R$0.80', operation: 'Saída' },
    { description: 'Test 2', value: 'R$0.80', operation: 'Saída' },
    { description: 'Test 333333 AAAAAAAAAAAAAAAAAA', value: 'R$0.80', operation: 'Saída' },
  ]

  return (
    <div className={style.container}>
      <title>Test</title>

      {/* Add header */}

      <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row', gap: '1rem', height: 'fit-content' }}>
        <Card>
          <TableRow fontWeight={600} labels={['Descrição', 'Valor', 'Operação']} />

          <div>
            {dataExample.map((data) => (
              <TableRow labels={Object.values(data)} />
            ))}
          </div>
        </Card>

        {/* Transformar o segundo (descrição) em uma tooltip */}
        <div>
          <p style={{ fontWeight: 600, fontSize: '1.2rem' }}>Últimas Movimentações</p>
          <p>Mostra as últimas cinco (05) movimentações inseridas para o mês vigente</p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        <Card width="fit-content">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ fontWeight: 700 }}>Março - 2025</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 600 }}>R$250.00</p>
            <p style={{ marginTop: '1rem' }}>Próximo mês (Abril - 2025): R$250.00</p>
          </div>
        </Card>
        <Card width="fit-content">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '1rem',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p style={{ fontWeight: 700 }}>Março - 2025</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 600 }}>R$300.00</p>
              </div>
              <p style={{ fontSize: '1.5rem', fontWeight: 600, height: 'fit-content' }}>(Vale)</p>
            </div>
            <p style={{ marginTop: '1rem' }}>Próximo mês (Abril - 2025): R$250.00</p>
          </div>
        </Card>
      </div>

      <Card height="100%" justifyContent="center" alignItems="center">
        Em Breve!
      </Card>
    </div>
  )
}
