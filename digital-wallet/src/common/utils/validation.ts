/**
 * Utilitários de validação para props e dados
 */

/**
 * Valida se um valor é um número válido
 * @param value - Valor a ser validado
 * @returns true se for um número válido
 */
export const isValidNumber = (value: any): value is number => {
  return typeof value === 'number' && !isNaN(value) && isFinite(value)
}

/**
 * Valida se um valor é uma string não vazia
 * @param value - Valor a ser validado
 * @returns true se for uma string válida
 */
export const isValidString = (value: any): value is string => {
  return typeof value === 'string' && value.trim().length > 0
}

/**
 * Valida se um valor está dentro de um range
 * @param value - Valor a ser validado
 * @param min - Valor mínimo
 * @param max - Valor máximo
 * @returns true se estiver no range
 */
export const isInRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max
}

/**
 * Valida se um valor é um tipo específico
 * @param value - Valor a ser validado
 * @param type - Tipo esperado
 * @returns true se for do tipo correto
 */
export const isValidType = (value: any, type: string): boolean => {
  return typeof value === type
}

/**
 * Valida props obrigatórias de um objeto
 * @param props - Objeto com as props
 * @param requiredProps - Array com as props obrigatórias
 * @returns true se todas as props obrigatórias existem
 */
export const validateRequiredProps = (props: Record<string, any>, requiredProps: string[]): boolean => {
  return requiredProps.every(prop => prop in props && props[prop] !== undefined && props[prop] !== null)
}

/**
 * Valida se um valor é um tipo de estatística válido
 * @param type - Tipo a ser validado
 * @returns true se for um tipo válido
 */
export const isValidStatsType = (type: any): type is 'income' | 'expense' | 'balance' => {
  return ['income', 'expense', 'balance'].includes(type)
}
