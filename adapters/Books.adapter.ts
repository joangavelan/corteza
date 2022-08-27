import { Book } from '@models'
import slugify from 'slugify'

export const adaptBookSearchResults = (googleBooks: any[]): Book[] => {
  const books = googleBooks
    .filter((googleBook) => googleBook.volumeInfo?.title)
    .map((googleBook) => ({
      id: googleBook.id,
      title: googleBook.volumeInfo.title,
      imgURL: googleBook.volumeInfo?.imageLinks?.thumbnail,
      author: googleBook.volumeInfo?.authors?.[0],
      rating: googleBook.volumeInfo?.averageRating,
      publishedYear: googleBook.volumeInfo?.publishedDate?.slice(0, 4),
      category: googleBook.volumeInfo?.categories?.[0],
      pageCount: googleBook.volumeInfo?.pageCount,
      slug: slugify(googleBook.volumeInfo.title, { lower: true }),
      currentPage: 0,
      entries: []
    }))

  // remove duplicate book results
  const uniqueBooks = books.filter(
    (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
  )

  return uniqueBooks
}
