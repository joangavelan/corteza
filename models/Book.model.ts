import { Entry } from './Entry.model'

export interface Book {
  id: string
  title: string
  author?: string
  pageCount: number
  imgURL?: string
  rating?: number
  publishedYear?: string
  category?: string
  currentPage: number
  entries: Entry[]
}
