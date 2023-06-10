import React from 'react'
import NewCounter from './NewCounter'
import OldCounter from './OldCounter'

export default function Home() {
  return (
    <>
      <h1 className="text-xl">Welcome to Our Home</h1>
      <NewCounter name="New Counter" />
      <hr className='my-4' />
      <OldCounter name="Old Counter" />
    </>
  )
}
