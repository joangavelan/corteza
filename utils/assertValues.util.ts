import { SettingsData } from '@models'

// This utility function ensures that the values obtained through the
// settings form have the correct type and are correctly formatted.
export const assertValues = (data: SettingsData) => {
  const e = Object.entries(data).map(([key, value]) => {
    if (value) {
      switch (key) {
        case 'rating':
        case 'pageCount':
          return [key, Number(value)]
        case 'title':
        case 'author':
        case 'publishedYear':
        case 'category':
          return [key, (value as string).trimEnd()]
        default:
          return [key, value]
      }
    } else {
      return [key, value]
    }
  })

  return Object.fromEntries(e)
}
