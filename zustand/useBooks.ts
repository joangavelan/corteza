import { Book, Entry, EntryFormData } from '@models'
import create from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
  books: Book[]
  saveBook: (book: Book) => void
  deleteBook: (id: string) => void
  updateBook: (id: string, data: Partial<Book>) => void
  addReadPages: (id: string, pages: number) => void
  removeReadPages: (id: string, pages: number) => void
  addEntry: (bookId: string, entry: Entry) => void
  removeEntry: (bookId: string, entryId: string) => void
  updateEntry: (bookId: string, entryId: string, data: EntryFormData) => void
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
        })),
      addEntry: (bookId, entry) =>
        set((state) => ({
          books: state.books.map((book) => {
            if (book.id === bookId) {
              return { ...book, entries: [entry, ...book.entries] }
            }
            return book
          })
        })),
      removeEntry: (bookId, entryId) =>
        set((state) => ({
          books: state.books.map((book) => {
            if (book.id === bookId) {
              return {
                ...book,
                entries: book.entries.filter((entry) => entry.id !== entryId)
              }
            }
            return book
          })
        })),
      updateEntry: (bookId, entryId, data) =>
        set((state) => ({
          books: state.books.map((book) => {
            if (book.id === bookId) {
              return {
                ...book,
                entries: book.entries.map((entry) => {
                  if (entry.id === entryId) {
                    return { ...entry, ...data }
                  }
                  return entry
                })
              }
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
