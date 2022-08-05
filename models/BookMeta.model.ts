import { Book } from './Book.model'

export type BookMetaProps = Pick<
  Book,
  'title' | 'author' | 'rating' | 'category' | 'pageCount' | 'publishedYear'
>
