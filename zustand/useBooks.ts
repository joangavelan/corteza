import { Book, SettingsData } from '@models'
import create from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
  books: Book[]
  saveBook: (book: Book) => void
  deleteBook: (id: string) => void
  updateBook: (id: string, data: SettingsData) => void
  addReadPages: (id: string, pages: number) => void
  removeReadPages: (id: string, pages: number) => void
}

const useBooks = create<State>()(
  persist(
    (set) => ({
      books: [],
      saveBook: (book) =>
        set((state) => ({
          books: [...state.books, book]
        })),
      deleteBook: (id) =>
        set((state) => ({
          books: state.books.filter((book) => book.id !== id)
        })),
      updateBook: (id, data) =>
        set((state) => ({
          books: state.books.map((book) => {
            if (book.id === id) {
              return { ...book, ...data }
            }
            return book
          })
        })),
      addReadPages: (id, pages) =>
        set((state) => ({
          books: state.books.map((book) => {
            if (book.id === id) {
              return { ...book, currentPage: book.currentPage + pages }
            }
            return book
          })
        })),
      removeReadPages: (id, pages) =>
        set((state) => ({
          books: state.books.map((book) => {
            if (book.id === id) {
              return { ...book, currentPage: book.currentPage - pages }
            }
            return book
          })
        }))
    }),
    {
      name: 'corteza-app'
    }
  )
)

export default useBooks
