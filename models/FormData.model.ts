import { Book } from '@models'

export type FormData = Partial<Omit<Book, 'id'>>
