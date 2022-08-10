export interface Entry {
  id: string
  description: string
  type: 'idea' | 'note' | 'quote' | 'other'
  page: string
  createdAt: string
}
