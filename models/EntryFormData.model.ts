import { Entry } from './Entry.model'

export type EntryFormData = Pick<Entry, 'page' | 'description' | 'type'>
