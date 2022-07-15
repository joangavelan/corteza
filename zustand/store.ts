import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface BearState {
  searchQuery: string
  setSearchQuery: (searchQuery: string) => void
}

const useStore = create<BearState>()(
  devtools(
    persist((set) => ({
      searchQuery: '',
      setSearchQuery: (searchQuery) => set({ searchQuery })
    }))
  )
)

export default useStore
