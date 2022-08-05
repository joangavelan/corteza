import create from 'zustand'

interface State {
  message: string
  setMessage: (message: string) => void
}

const useWarningMessage = create<State>((set) => ({
  message: '',
  setMessage: (message) => set({ message })
}))

export default useWarningMessage
