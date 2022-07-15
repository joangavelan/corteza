import axios from 'axios'

const apiEndpoint = 'https://www.googleapis.com/books/v1/volumes?'
const lang = 'en'
const country = 'US'
const maxResults = 5

export const getGoogleBooks = async (query: string, signal: AbortSignal) => {
  const url = `${apiEndpoint}q=${query}&country=${country}&langRestrict=${lang}&maxResults=${maxResults}`
  const result = await axios.get(url, { signal })
  return result.data.items
}

// export const getBooks = async (query: string, signal: AbortSignal) => {
//   const url = 'http://localhost:3000/api/books'
//   const result = await axios.get(url)
//   return result.data
// }
