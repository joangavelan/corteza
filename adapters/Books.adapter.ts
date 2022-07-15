import { Book } from '@models'

export const adaptBookSearchResults = (googleBooks: any[]): Book[] => {
  return googleBooks.map((googleBook) => ({
    id: googleBook.id,
    title: googleBook.volumeInfo.title,
    imgUrl: googleBook.volumeInfo?.imageLinks?.thumbnail,
    author: googleBook.volumeInfo?.authors?.[0],
    rating: googleBook.volumeInfo?.averageRating,
    publishedYear: googleBook.volumeInfo?.publishedDate?.slice(0, 4),
    category: googleBook.volumeInfo?.categories?.[0],
    pageCount: googleBook.volumeInfo?.pageCount
  }))
}
