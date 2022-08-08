import React from 'react'
import styles from '@styles/Credits.module.scss'

const tools = [
  {
    name: 'Next.js',
    link: 'https://nextjs.org/'
  },
  {
    name: 'Zustand',
    link: 'https://github.com/pmndrs/zustand'
  },
  {
    name: 'React Hook Form',
    link: 'https://react-hook-form.com/'
  },
  {
    name: 'TanStack Table',
    link: 'https://tanstack.com/table/v8'
  }
]

const Credits = () => {
  return (
    <div className={styles.container}>
      <p>
        This{' '}
        <a
          href='https://github.com/joangavelan/corteza'
          target='_blank'
          rel='noreferrer noopener'
        >
          app
        </a>{' '}
        has been built using{' '}
        {tools.map(({ name, link }, index) => (
          <React.Fragment key={index}>
            <a href={link} target='_blank' rel='noreferrer noopener'>
              {name}
            </a>
            {index !== tools.length - 1 ? ', ' : ' '}
          </React.Fragment>
        ))}
        and more!
      </p>
    </div>
  )
}

export default Credits
