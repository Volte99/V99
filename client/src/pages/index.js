import Link from 'next/link'
import "@/components/Layout"
import Layout from '@/components/Layout'
import { useSelector } from 'react-redux'
import App from './home/index'




export default function Home() {
  const {isLoggedIn} = useSelector(state => state.user)
  if(isLoggedIn){
    return <App />
  }
  return(
   <>
   <Layout>
   </Layout>

  </> 
  )
}
