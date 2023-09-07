import Link from 'next/link'
import React from 'react'

function Login() {
  return (
    <div>
        <h1 className="text-white">this is login page</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><Link href="/home">Login</Link></button>
    </div>
  )
}

export default Login