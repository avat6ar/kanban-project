export const useLocalStorage = () => {
  return {
    setItem: (key: string, value: string | object) => {
      localStorage.setItem(key, JSON.stringify(value))
    },
    getItem: (key: string) => {
      return JSON.parse(localStorage.getItem(key) as string) || ''
    },
    removeItem: (key: string) => {
      localStorage.removeItem(key)
    },
  }
}