export interface Book {
  id: number
  title: string
  author?: string
  pageCount?: number
  imgUrl?: string
  rating?: number
  currentPage?: number
  publishedDate?: string
  category?: string
}
