const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight']

export const preventNonNumericInput = (
  e: React.KeyboardEvent<HTMLInputElement>
) => {
  if (isNaN(Number(e.key)) && !allowedKeys.includes(e.key)) {
    e.preventDefault()
  }
}
