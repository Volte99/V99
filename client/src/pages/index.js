import Link from 'next/link'
import "@/components/Layout"
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return(
   <>
   <Layout>
  {/* <div className="flex flex-col h-screen bg-indigo-400 p-6 space-y-6">
    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white">
      UNLEASH THE POWER OF THE NEW V99 CHAT SPACE
    </h1>
    <p className="text-lg text-white">
      This is the official version. This beta version is just for the
      implementation of new features and for user feedback.
    </p>
    <div className="flex space-x-4 mt-4">
      <Link
        href="/login"
        className="bg-lime-500 hover:bg-lime-600 text-white py-2 px-4 rounded-lg text-lg transition duration-300 ease-in-out"
      >
        Get Started
      </Link>
    </div>
  </div> */}
</Layout>

  </> 
  )
}
