import create from 'zustand'

interface State {
  id: string
  setId: (id: string) => void
}

const useCurrentBookId = create<State>((set) => ({
  id: '',
  setId: (id) => set({ id })
}))

export default useCurrentBookId
