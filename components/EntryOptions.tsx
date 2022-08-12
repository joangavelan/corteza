import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu'
import styles from '@styles/EntryOptions.module.scss'
import '@szhsin/react-menu/dist/transitions/slide.css'
import { Entry } from '@models'

interface EntryOptionsProps {
  entry: Entry
}

const EntryOptions = ({ entry }: EntryOptionsProps) => {
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
        <MenuItem onClick={() => console.log(entry)}>Open</MenuItem>
        <MenuItem>Delete</MenuItem>
      </Menu>
    </td>
  )
}

export default EntryOptions
