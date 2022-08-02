import { Book } from '@models'
import create from 'zustand'

interface State {
  selectedBook: Book | null
  setSelectedBook: (selectedBook: Book | null) => void
}

const useSelectedBook = create<State>()((set) => ({
  selectedBook: null,
  setSelectedBook: (selectedBook) =>
    set((state) => ({ ...state, selectedBook }))
}))

export default useSelectedBook
