import Link from 'next/link'
import "@/components/Layout"
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return(
   <>
    <Layout />
    <div className="flex flex-col bg-indigo-400 m-5 p-4 rounded-lg space-y-6">
      <div className="m-4 p-4">
       <p className="text-5xl font-bold">UNLEASH THE POWER OF THE NEW V99 CHAT SPACE</p>
      </div>
      <div>
       <p><Link href="/home" className="bg-lime-300 p-3 rounded-lg">Get Started</Link></p>
      </div>
     <h2 ><Link href="/register">register</Link></h2>
     <h2><Link href="/login">login</Link></h2> 
    </div>
  </> 
  )
}
