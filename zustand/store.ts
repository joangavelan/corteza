import { Book } from '@models'
import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface State {
  searchQuery: string
  setSearchQuery: (searchQuery: string) => void
  selectedBook: Book | null
  setSelectedBook: (selectedBook: Book | null) => void
}

const useStore = create<State>()(
  devtools(
    persist((set) => ({
      searchQuery: '',
      setSearchQuery: (searchQuery) =>
        set((state) => ({ ...state, searchQuery })),
      selectedBook: null,
      setSelectedBook: (selectedBook) =>
        set((state) => ({ ...state, selectedBook }))
    }))
  )
)

export default useStore
