import { Book } from '@models'

export interface Setting {
  id: keyof Book
  label: string
  type: 'text'
  placeholder: string
  pattern?: { value: RegExp; message: string }
  required: boolean | string
  validate: (value: string) => boolean | string
}
