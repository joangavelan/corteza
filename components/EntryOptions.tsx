import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu'
import styles from '@styles/EntryOptions.module.scss'
import '@szhsin/react-menu/dist/transitions/slide.css'

const EntryOptions = () => {
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
        <MenuItem>Open</MenuItem>
        <MenuItem>Delete</MenuItem>
      </Menu>
    </td>
  )
}

export default EntryOptions
