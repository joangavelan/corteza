import { useEffect, useRef } from 'react'

export const useClickAwayListener = <T extends HTMLElement>(
  callback: () => void
) => {
  const ref = useRef<T>(null)

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [ref])

  return ref
}
