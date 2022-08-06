import { useState, useEffect } from 'react'
import { ProgressProviderProps } from '@models'

const ProgressProvider = ({
  valueStart,
  valueEnd,
  children
}: ProgressProviderProps) => {
  const [value, setValue] = useState(valueStart)
  useEffect(() => {
    setValue(valueEnd)
  }, [valueEnd])

  return children(value)
}
export default ProgressProvider
