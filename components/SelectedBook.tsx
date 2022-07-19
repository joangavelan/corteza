import { SelectedBookProps } from '@models'
import styles from '@styles/SelectedBook.module.scss'
import { IoClose } from 'react-icons/io5'
import useStore from '@zustand/store'

const SelectedBook = ({ title, author }: SelectedBookProps) => {
  const setSelectedBook = useStore((set) => set.setSelectedBook)

  const removeSelectedBook = () => {
    setSelectedBook(null)
  }

  return (
    <div className={styles.container}>
      <div className={styles.meta}>
        <h4 className={styles.title}>{title} </h4>
        {author && <p className={styles.author}>by {author}</p>}
      </div>
      <div className={styles.icon} onClick={removeSelectedBook}>
        <IoClose />
      </div>
    </div>
  )
}

export default SelectedBook
