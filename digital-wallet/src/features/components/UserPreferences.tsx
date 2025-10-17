import { Card } from '@/common/components/Card'
import { usePreference } from '@/common/hooks/useLocalStorage'
import { FC } from 'react'
import style from '../styles/user-preferences.module.scss'

interface UserPreferencesProps {
  onThemeChange?: (theme: string) => void
  onCurrencyChange?: (currency: string) => void
}

export const UserPreferences: FC<UserPreferencesProps> = ({ 
  onThemeChange, 
  onCurrencyChange 
}) => {
  const [theme, setTheme] = usePreference('theme', 'light')
  const [currency, setCurrency] = usePreference('currency', 'BRL')
  const [notifications, setNotifications] = usePreference('notifications', true)

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    onThemeChange?.(newTheme)
  }

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency)
    onCurrencyChange?.(newCurrency)
  }

  return (
    <Card width="fit-content" minWidth="300px">
      <div className={style.container}>
        <h3 className={style.title}>Preferências do Usuário</h3>
        
        <div className={style.section}>
          <label className={style.label}>Tema:</label>
          <select 
            value={theme} 
            onChange={(e) => handleThemeChange(e.target.value)}
            className={style.select}
          >
            <option value="light">Claro</option>
            <option value="dark">Escuro</option>
            <option value="auto">Automático</option>
          </select>
        </div>

        <div className={style.section}>
          <label className={style.label}>Moeda:</label>
          <select 
            value={currency} 
            onChange={(e) => handleCurrencyChange(e.target.value)}
            className={style.select}
          >
            <option value="BRL">Real (R$)</option>
            <option value="USD">Dólar ($)</option>
            <option value="EUR">Euro (€)</option>
          </select>
        </div>

        <div className={style.section}>
          <label className={style.checkboxLabel}>
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className={style.checkbox}
            />
            Receber notificações
          </label>
        </div>

        <div className={style.info}>
          <small>Suas preferências são salvas automaticamente</small>
        </div>
      </div>
    </Card>
  )
}
