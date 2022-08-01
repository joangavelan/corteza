import { BookMeta } from '@models'

export type FormData = Partial<Omit<BookMeta, 'id'>>
