import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <>
      <div>
        <nav>
          <ul className="flex font-medium text-xl bg-fuchsia-400 justify-end  p-4 space-x-4">
            <li><Link href="/home">Home</Link></li>
            <li>Services</li>
            <li>Contacts</li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar
