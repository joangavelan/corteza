import { BookMeta } from '@models'

export type SettingsData = Partial<Omit<BookMeta, 'id'>>
