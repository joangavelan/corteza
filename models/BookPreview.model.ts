import { Book } from "./Book.model"

export type BookPreviewProps = Pick<Book, 'title' | 'author' | 'imgURL' | 'rating'>