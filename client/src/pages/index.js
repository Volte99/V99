import Link from 'next/link'
import "@/components/Layout"
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return(
   <>
    <Layout>
    <div className="flex flex-col h-96 bg-indigo-400 m-5 p-4 rounded-lg space-y-6">
       <h1 className="text-8xl font-bold ">UNLEASH THE POWER OF THE NEW V99 CHAT SPACE</h1>
       <h2>This is the official version. This beta version is just for the implementation of new features and for users(choosen one's only) feedbacks. </h2>
       <h2><Link href="/home" className="bg-lime-300 p-3 rounded-lg m-4">Get Started</Link></h2>
     <div className="flex space-x-6 p-5">
       <h2 ><Link href="/register">register</Link></h2>
       <h2><Link href="/login">login</Link></h2> 
     </div>  
    </div>
    </Layout>
  </> 
  )
}
