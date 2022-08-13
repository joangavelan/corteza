import { DeleteEntryProps } from '@models'
import useBooks from '@zustand/useBooks'
import ConfirmationDialog from './ConfirmationDialog'
import useCurrentBookId from '@zustand/useCurrentBookId'

const DeleteEntry = ({ entryId, setOpen }: DeleteEntryProps) => {
  const removeEntry = useBooks((state) => state.removeEntry)
  const bookId = useCurrentBookId((state) => state.id)

  const onDelete = () => {
    removeEntry(bookId, entryId)
    setOpen(false)
  }

  return (
    <ConfirmationDialog
      title='Confirm entry deletion'
      description='Are you sure you want to delete this entry?'
      onConfirm={onDelete}
      setOpen={setOpen}
    />
  )
}

export default DeleteEntry
