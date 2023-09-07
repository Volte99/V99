import React from 'react'
import Link from 'next/link'

function Register() {
  return (
    <div>
        <h1 className="text-white">this is register page</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link href="/home"> Register </Link></button>
    </div>
  )
}

export default Register

