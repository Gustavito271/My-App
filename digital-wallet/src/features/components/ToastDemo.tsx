import { Card } from '@/common/components/Card'
import { useToast } from '@/common/hooks/useToast'
import { FC } from 'react'
import { 
  CheckCircle, 
  Error, 
  Warning, 
  Info, 
  NotificationsActive,
  ClearAll 
} from '@mui/icons-material'
import style from '../styles/toast-demo.module.scss'

export const ToastDemo: FC = () => {
  const { success, error, warning, info, clearAllToasts } = useToast()

  const handleSuccess = () => {
    success(
      'Operação realizada!',
      'Seus dados foram salvos com sucesso.',
      {
        duration: 4000,
        action: {
          label: 'Ver detalhes',
          onClick: () => console.log('Ver detalhes clicado'),
          variant: 'primary'
        }
      }
    )
  }

  const handleError = () => {
    error(
      'Erro ao processar',
      'Não foi possível salvar os dados. Tente novamente.',
      {
        duration: 6000,
        action: {
          label: 'Tentar novamente',
          onClick: () => console.log('Tentar novamente clicado'),
          variant: 'secondary'
        }
      }
    )
  }

  const handleWarning = () => {
    warning(
      'Atenção necessária',
      'Verifique os dados antes de continuar.',
      {
        duration: 5000,
        action: {
          label: 'Verificar',
          onClick: () => console.log('Verificar clicado'),
          variant: 'ghost'
        }
      }
    )
  }

  const handleInfo = () => {
    info(
      'Informação importante',
      'Sistema será atualizado em 5 minutos.',
      {
        duration: 8000,
        action: {
          label: 'Entendi',
          onClick: () => console.log('Entendi clicado'),
          variant: 'primary'
        }
      }
    )
  }

  const handleMultiple = () => {
    success('Primeira notificação', 'Esta é a primeira')
    setTimeout(() => warning('Segunda notificação', 'Esta é a segunda'), 500)
    setTimeout(() => info('Terceira notificação', 'Esta é a terceira'), 1000)
    setTimeout(() => error('Quarta notificação', 'Esta é a quarta'), 1500)
  }

  const handlePersistent = () => {
    success(
      'Notificação persistente',
      'Esta notificação não desaparece automaticamente.',
      {
        duration: 0, // 0 = não desaparece
        action: {
          label: 'Fechar',
          onClick: () => console.log('Fechar clicado'),
          variant: 'primary'
        }
      }
    )
  }

  return (
    <Card width="fit-content" minWidth="400px">
      <div className={style.container}>
        <div className={style.header}>
          <NotificationsActive className={style.headerIcon} />
          <h3 className={style.title}>Sistema de Notificações</h3>
        </div>

        <div className={style.grid}>
          <button
            className={`${style.button} ${style.success}`}
            onClick={handleSuccess}
          >
            <CheckCircle className={style.buttonIcon} />
            Sucesso
          </button>

          <button
            className={`${style.button} ${style.error}`}
            onClick={handleError}
          >
            <Error className={style.buttonIcon} />
            Erro
          </button>

          <button
            className={`${style.button} ${style.warning}`}
            onClick={handleWarning}
          >
            <Warning className={style.buttonIcon} />
            Aviso
          </button>

          <button
            className={`${style.button} ${style.info}`}
            onClick={handleInfo}
          >
            <Info className={style.buttonIcon} />
            Informação
          </button>

          <button
            className={`${style.button} ${style.multiple}`}
            onClick={handleMultiple}
          >
            <NotificationsActive className={style.buttonIcon} />
            Múltiplas
          </button>

          <button
            className={`${style.button} ${style.persistent}`}
            onClick={handlePersistent}
          >
            <Info className={style.buttonIcon} />
            Persistente
          </button>
        </div>

        <div className={style.footer}>
          <button
            className={style.clearButton}
            onClick={clearAllToasts}
          >
            <ClearAll className={style.clearIcon} />
            Limpar todas
          </button>
        </div>
      </div>
    </Card>
  )
}
