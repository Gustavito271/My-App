/**
 * Utilitários para formatação de moeda
 */

/**
 * Formata um valor numérico para o formato de moeda brasileira
 * @param value - Valor numérico a ser formatado
 * @param currency - Código da moeda (padrão: 'BRL')
 * @returns String formatada no padrão brasileiro (R$ 1.234,56)
 */
export const formatCurrency = (value: number, currency: string = 'BRL'): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: currency,
  }).format(value)
}

/**
 * Formata um valor numérico para o formato de moeda brasileira sem símbolo
 * @param value - Valor numérico a ser formatado
 * @returns String formatada no padrão brasileiro (1.234,56)
 */
export const formatCurrencyValue = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

/**
 * Converte string de moeda para número
 * @param currencyString - String no formato "R$ 1.234,56"
 * @returns Número convertido
 */
export const parseCurrency = (currencyString: string): number => {
  const cleanString = currencyString.replace(/[^\d,-]/g, '')
  const normalizedString = cleanString.replace(',', '.')
  return parseFloat(normalizedString) || 0
}
