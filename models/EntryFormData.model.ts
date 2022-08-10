import { Entry } from './Entry.model'

export type EntryFormData = Partial<
  Pick<Entry, 'page' | 'description' | 'type'>
>
