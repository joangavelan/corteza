import React from 'react'

export interface SettingsProps {
  ids: string[]
  title: string
  description?: string
  setOpenSettings: React.Dispatch<React.SetStateAction<boolean>>
}
