import { Entry } from '@models'
import { GoLightBulb, GoNote, GoQuote } from 'react-icons/go'
import { BsChatSquareDots } from 'react-icons/bs'

const EntryTypeIcon = ({ type }: { type: Entry['type'] }) => {
  switch (type) {
    case 'note':
      return <GoNote />
    case 'quote':
      return <GoQuote />
    case 'idea':
      return <GoLightBulb />
    case 'other':
      return <BsChatSquareDots />
  }
}

export default EntryTypeIcon
