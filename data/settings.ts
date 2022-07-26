import { Setting } from '@models'

const settings: Setting[] = [
  {
    id: 'title',
    label: 'Title',
    type: 'text',
    placeholder: 'Blue Economy',
    required: true
  },
  {
    id: 'author',
    label: 'Author',
    type: 'text',
    placeholder: 'Gunter Pauli',
    required: false
  },
  {
    id: 'rating',
    label: 'Rating',
    type: 'number',
    placeholder: '4.9',
    required: false
  },
  {
    id: 'imgURL',
    label: 'Image URL',
    type: 'url',
    placeholder: 'https://example.com/image.png',
    required: false
  },
  {
    id: 'pageCount',
    label: 'Page Count',
    type: 'number',
    placeholder: '295',
    required: true
  },
  {
    id: 'publishedYear',
    label: 'Published Year',
    type: 'text',
    placeholder: '2012',
    required: false
  },
  {
    id: 'category',
    label: 'Category',
    type: 'text',
    placeholder: 'Entrepreneurship',
    required: false
  }
]

export default settings
