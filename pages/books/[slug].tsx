import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import useBooks from '@zustand/useBooks'

const Book: NextPage = () => {
  const router = useRouter()
  const { slug } = router.query
  const books = useBooks((state) => state.books)
  const book = books.find((book) => book.slug === slug)

  if (!book) {
    return (
      <div>
        <h1>Book not found</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>{book?.title}</h1>
    </div>
  )
}

export default Book
