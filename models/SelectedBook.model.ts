import { Book } from './Book.model'

export type SelectedBookProps = Pick<Book, 'title' | 'author'>
