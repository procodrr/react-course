import React from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

export default function Home() {
  return (
    <>
      <h1 className="text-xl">Welcome to Our Home</h1>
      <ClickCounter name="Click Counter" />
      <HoverCounter name="Hover Counter" />
    </>
  )
}
