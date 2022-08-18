import { ButtonHTMLAttributes } from 'react'
import { IconType } from 'react-icons'

export interface Entry {
  id: string
  description: string
  type: 'idea' | 'note' | 'quote' | 'other'
  page: string
  createdAt: number
}

export interface Book {
  id: string
  title: string
  slug: string
  author: string
  pageCount: number
  imgURL: string
  rating: number
  publishedYear: string
  category: string
  currentPage: number
  entries: Entry[]
}

export interface AddEntryProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  bookId: string
}

export interface BookMetaProps
  extends Omit<Book, 'id' | 'slug' | 'currentPage' | 'entries' | 'imgURL'> {}

export interface BookPreviewProps
  extends Pick<Book, 'title' | 'author' | 'imgURL' | 'rating'> {}

export interface ButtonProps {
  text: string
  type: ButtonHTMLAttributes<HTMLButtonElement>['type']
  color: 'dark' | 'light'
  size: 'small' | 'medium' | 'large'
  onClick?: (...args: any) => void
  Icon?: IconType
}

export interface CircularProgressProps
  extends Pick<Book, 'title' | 'imgURL' | 'currentPage' | 'pageCount'> {}

export interface EntryFormData
  extends Pick<Entry, 'page' | 'description' | 'type'> {}

export interface EntryInterfaceProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  onSubmit: (data: EntryFormData) => void
  defaultValues?: EntryFormData
}

export interface MainProps {
  bookId: string
  entriesLength: number
}

export interface OpenEntryProps {
  entry: Entry
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ProgressProviderProps {
  valueStart: number
  valueEnd: number
  children: (value: number) => JSX.Element
}

export interface SelectedBookProps extends Pick<Book, 'title' | 'author'> {}

export interface Setting {
  id: keyof Book
  label: string
  type: 'text'
  placeholder: string
  pattern?: { value: RegExp; message: string }
  required: boolean | string
  validate: (value: string) => boolean | string
}

export interface SettingsData
  extends Partial<Omit<Book, 'id' | 'slug' | 'currentPage' | 'entries'>> {}

export interface SettingsProps {
  conditionalFields?: Array<keyof Book>
  selectedBook: Book
  title: string
  description?: string
  setOpenSettings: React.Dispatch<React.SetStateAction<boolean>>
}

export interface DeleteEntryProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  entryId: string
}

export interface ConfirmationDialogProps {
  title: string
  description: string
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  onConfirm: () => void
}

export interface SidebarProps {
  book: Book
}

export interface MainHeaderProps {
  entriesLength: number
  bookId: string
}
