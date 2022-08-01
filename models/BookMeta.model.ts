import { Book } from './Book.model'

export type BookMeta = Omit<Book, 'currentPage' | 'entries'>
