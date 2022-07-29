import React from 'react'
import { Book } from './Book.model'

export interface SettingsProps {
  conditionalFields?: Array<keyof Book>
  title: string
  description?: string
  setOpenSettings: React.Dispatch<React.SetStateAction<boolean>>
}
