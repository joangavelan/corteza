import { EntryFormData } from './EntryFormData.model'

export interface EntryInterfaceProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  onSubmit: (data: EntryFormData) => void
  defaultValues?: EntryFormData
}
