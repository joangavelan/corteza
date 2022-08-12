import { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu'
import styles from '@styles/EntryOptions.module.scss'
import '@szhsin/react-menu/dist/transitions/slide.css'
import { Entry } from '@models'
import OpenEntry from './OpenEntry'

const EntryOptions = ({ entry }: { entry: Entry }) => {
  const [openEntry, setOpenEntry] = useState(false)

  return (
    <td>
      <Menu
        className={styles.menu}
        position='anchor'
        direction='left'
        align='start'
        viewScroll='auto'
        transition={true}
        unmountOnClose={true}
        menuButton={
          <MenuButton className={styles.menuButton}>
            <BsThreeDotsVertical />
          </MenuButton>
        }
      >
        <MenuItem onClick={() => setOpenEntry(true)}>Open</MenuItem>
        <MenuItem>Delete</MenuItem>
      </Menu>
      {openEntry && <OpenEntry setOpen={setOpenEntry} entry={entry} />}
    </td>
  )
}

export default EntryOptions
