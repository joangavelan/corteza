import { Setting } from '@models'
import { isValidURL } from '@utils'

const settings: Setting[] = [
  {
    id: 'title',
    label: 'Title',
    type: 'text',
    placeholder: 'Blue Economy',
    required: 'title is required',
    pattern: {
      value: /^([^ ]+ ?){1,}[^ ]{0,2}$/,
      message: 'unnecessary spaces'
    },
    validate: (value: string) =>
      (value.length >= 3 && value.length <= 120) ||
      'min 3 characters, max 120 characters'
  },
  {
    id: 'author',
    label: 'Author',
    type: 'text',
    placeholder: 'Gunter Pauli',
    required: false,
    pattern: {
      value: /^([^ ]+ ?){1,}[^ ]{0,2}$/,
      message: 'unnecessary spaces'
    },
    validate: (value: string) =>
      (value.length >= 3 && value.length <= 50) ||
      'min 3 characters, max 50 characters'
  },
  {
    id: 'rating',
    label: 'Rating',
    type: 'text',
    placeholder: '4.9',
    required: false,
    pattern: {
      value: /^\d+(\.\d{1})?$/,
      message: 'numbers with one decimal point only'
    },
    validate: (value: string) =>
      (Number(value) >= 1 && Number(value) <= 5) ||
      'rating must be between 1 and 5'
  },
  {
    id: 'imgURL',
    label: 'Image URL',
    type: 'text',
    placeholder: 'https://example.com/image.png',
    required: false,
    pattern: {
      value: /^([^ ]+ ?){1,}[^ ]{0,2}$/,
      message: 'unnecessary spaces'
    },
    validate: (value: string) => isValidURL(value) || 'please enter a valid URL'
  },
  {
    id: 'pageCount',
    label: 'Page Count',
    type: 'text',
    placeholder: '295',
    required: 'page count is required',
    pattern: {
      value: /^\d+$/,
      message: 'whole numbers only'
    },
    validate: (value: string) =>
      (Number(value) >= 4 && Number(value) <= 3031) ||
      'min 4 pages, max 3031 pages'
  },
  {
    id: 'publishedYear',
    label: 'Published Year',
    type: 'text',
    placeholder: '2012',
    required: false,
    pattern: {
      value: /^\d+$/,
      message: 'please enter a valid year'
    },
    validate: (value: string) =>
      (Number(value) >= 1 && Number(value) <= new Date().getFullYear()) ||
      'please enter a valid year'
  },
  {
    id: 'category',
    label: 'Category',
    type: 'text',
    placeholder: 'Entrepreneurship',
    required: false,
    pattern: {
      value: /^([^ ]+ ?){1,}[^ ]{0,2}$/,
      message: 'unnecessary spaces'
    },
    validate: (value: string) =>
      (value.length >= 3 && value.length <= 20) ||
      'min 3 characters, max 20 characters'
  }
]

export default settings
