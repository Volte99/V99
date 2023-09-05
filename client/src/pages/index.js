import Link from 'next/link'
import "@/components/Layout"
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return(
   <>
    <Layout />
     <h1>this is the gateway to home</h1>
     <h2><Link href="/register">register</Link></h2>
     <h2><Link href="/login">login</Link></h2>
  </> 
  )
}
