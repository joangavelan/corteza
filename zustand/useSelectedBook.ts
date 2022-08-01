import { BookMeta } from '@models'
import create from 'zustand'

interface State {
  selectedBook: BookMeta | null
  setSelectedBook: (selectedBook: BookMeta | null) => void
}

const useSelectedBook = create<State>()((set) => ({
  selectedBook: null,
  setSelectedBook: (selectedBook) =>
    set((state) => ({ ...state, selectedBook }))
}))

export default useSelectedBook
