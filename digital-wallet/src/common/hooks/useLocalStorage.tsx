import { useState, useEffect } from 'react'

/**
 * Hook customizado para gerenciar dados no localStorage
 * @param key - Chave para armazenar no localStorage
 * @param initialValue - Valor inicial caso não exista no localStorage
 * @returns [value, setValue] - Array com o valor atual e função para atualizar
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  // Estado para armazenar o valor atual
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Tenta buscar o valor do localStorage
      const item = window.localStorage.getItem(key)
      // Se existir, converte de JSON, senão usa o valor inicial
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // Em caso de erro, retorna o valor inicial
      console.warn(`Erro ao ler localStorage key "${key}":`, error)
      return initialValue
    }
  })

  // Função para atualizar o valor
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Permite tanto valor direto quanto função
      const valueToStore = value instanceof Function ? value(storedValue) : value
      
      // Atualiza o estado
      setStoredValue(valueToStore)
      
      // Salva no localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.warn(`Erro ao salvar no localStorage key "${key}":`, error)
    }
  }

  // Função para remover o item do localStorage
  const removeValue = () => {
    try {
      window.localStorage.removeItem(key)
      setStoredValue(initialValue)
    } catch (error) {
      console.warn(`Erro ao remover localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue, removeValue] as const
}

/**
 * Hook para gerenciar preferências do usuário
 * @param key - Chave da preferência
 * @param defaultValue - Valor padrão
 * @returns [preference, setPreference, removePreference]
 */
export function usePreference<T>(key: string, defaultValue: T) {
  const [preference, setPreference, removePreference] = useLocalStorage(
    `preference_${key}`,
    defaultValue
  )

  return [preference, setPreference, removePreference] as const
}

/**
 * Hook para gerenciar dados de sessão (não persistem após fechar o navegador)
 * @param key - Chave para armazenar na sessão
 * @param initialValue - Valor inicial
 * @returns [value, setValue, removeValue]
 */
export function useSessionStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.sessionStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`Erro ao ler sessionStorage key "${key}":`, error)
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.sessionStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.warn(`Erro ao salvar no sessionStorage key "${key}":`, error)
    }
  }

  const removeValue = () => {
    try {
      window.sessionStorage.removeItem(key)
      setStoredValue(initialValue)
    } catch (error) {
      console.warn(`Erro ao remover sessionStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue, removeValue] as const
}
