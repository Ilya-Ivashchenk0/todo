import { useEffect, useRef, useState } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const isFirstLoadRef = useRef(true)
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    if (isFirstLoadRef.current) {
      isFirstLoadRef.current = false
      return
    }
    try {
      const serialized = JSON.stringify(storedValue)
      window.localStorage.setItem(key, serialized)
    } catch (err) {
      console.log('localStorage set failed', err)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue] as const
}
