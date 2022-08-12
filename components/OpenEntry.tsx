import { EntryFormData } from '@models'
import React from 'react'
import EntryInterface from './EntryInterface'
import useBooks from '@zustand/useBooks'
import useCurrentBookId from '@zustand/useCurrentBookId'
import { OpenEntryProps } from '@models'

const OpenEntry = ({ entry, setOpen }: OpenEntryProps) => {
  const updateEntry = useBooks((state) => state.updateEntry)
  const bookId = useCurrentBookId((state) => state.id)

  const defaultValues = (({ page, description, type }) => ({
    page,
    description,
    type
  }))(entry) as EntryFormData

  const onUpdate = (data: EntryFormData) => {
    updateEntry(bookId, entry.id, data)
    setOpen(false)
  }

  return (
    <EntryInterface
      setOpen={setOpen}
      onSubmit={onUpdate}
      defaultValues={defaultValues}
    />
  )
}

export default OpenEntry
