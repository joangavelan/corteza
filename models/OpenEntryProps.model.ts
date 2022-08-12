import { Entry } from '@models'

export interface OpenEntryProps {
  entry: Entry
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
