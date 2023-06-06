import React from 'react'

export default function Modal() {
  return (
      <div className="fixed flex items-center px-4 justify-center inset-0 bg-black/40">
      <div className="rounded-lg grow max-w-2xl bg-white p-4 shadow-lg">
        <div className="text-xl font-bold">Sign In</div>
        <div className="-mx-4 my-3 border-y px-4 py-4 flex flex-wrap gap-4">
          <input
            placeholder="Username"
            className="grow rounded border border-gray-600 px-2 py-1"
            type="text"
          />
          <input
            placeholder="Password"
            className="grow rounded border border-gray-600 px-2 py-1"
            type="password"
          />
        </div>
        <div className="flex justify-end gap-4">
          <button className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60">
            Cancel
          </button>
          <button className="rounded-md bg-blue-300 px-6 py-2 font-semibold hover:bg-blue-400/80 active:bg-blue-400/60">
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}
