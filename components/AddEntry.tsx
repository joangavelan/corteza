import React from 'react'
import useBooks from '@zustand/useBooks'
import EntryInterface from './EntryInterface'
import { EntryFormData } from '@models'
import { v4 as uuidv4 } from 'uuid'
import { AddEntryProps } from '@models'

const AddEntry = ({ setOpen, bookId }: AddEntryProps) => {
  const addEntry = useBooks((state) => state.addEntry)

  const onSubmit = (data: EntryFormData) => {
    const newEntry = {
      id: uuidv4(),
      createdAt: Date.now(),
      ...data
    }
    addEntry(bookId, newEntry)
    setOpen(false)
  }

  return <EntryInterface setOpen={setOpen} onSubmit={onSubmit} />
}

export default AddEntry
