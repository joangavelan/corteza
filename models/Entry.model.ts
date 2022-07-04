export interface EntryProps {
  id: number
  description: string
  type: 'idea | note | quote | other' 
  page: number
  createdAt: string
}