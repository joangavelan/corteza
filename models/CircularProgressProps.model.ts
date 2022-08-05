import { Book } from './Book.model'

export type CircularProgressProps = Pick<
  Book,
  'title' | 'imgURL' | 'currentPage' | 'pageCount'
>
