import create from 'zustand'

interface State {
  searchQuery: string
  setSearchQuery: (searchQuery: string) => void
}

const useSearchQuery = create<State>((set) => ({
  searchQuery: '',
  setSearchQuery: (searchQuery) => set({ searchQuery })
}))

export default useSearchQuery
