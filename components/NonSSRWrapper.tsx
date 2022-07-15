import React from 'react'
import dynamic from 'next/dynamic'

interface Props {
  children: React.ReactNode
}

const NonSSRWrapper = ({ children }: Props) => (
  <React.Fragment>{children}</React.Fragment>
)
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false
})
