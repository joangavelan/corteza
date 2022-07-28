import { Book } from '@models'

export interface Setting {
  id: keyof Book
  label: string
  type: 'text'
  placeholder: string
  required: boolean
  validate: (value: string) => boolean | string
}
