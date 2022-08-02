import { Book } from '@models'

export type SettingsData = Partial<
  Omit<Book, 'id' | 'slug' | 'currentPage' | 'entries'>
>
