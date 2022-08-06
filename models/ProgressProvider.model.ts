export interface ProgressProviderProps {
  valueStart: number
  valueEnd: number
  children: (value: number) => JSX.Element
}