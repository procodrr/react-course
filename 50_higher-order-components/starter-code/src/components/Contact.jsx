import React, { useState } from 'react'
import Modal from './Modal'

export function Contact() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <h1 className="text-xl">
        Connect with us on{' '}
        <a
          className="text-blue-600 hover:text-blue-700"
          href="https://www.youtube.com/@procodrr"
          target="_blank"
        >
          YouTube
        </a>
      </h1>
      <button onClick={() => setIsOpen(true)}>Open Popup</button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        header={<p className="text-2xl font-bold text-red-400">Hiii</p>}
        footer={
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="rounded bg-slate-300 px-4 py-2 font-bold"
            >
              Ok
            </button>
          </div>
        }
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          nam dolorem maiores architecto quisquam voluptate numquam adipisci
          sunt dignissimos temporibus. Consequuntur enim, minima aut quia
          debitis officiis quis reiciendis nisi!
        </p>
      </Modal>
    </>
  )
}
