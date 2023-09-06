import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return(
    <>
    <Head>
        <title>V99</title>
        <meta name="description" content="created using next js" />
        <link rel="icon" href="/star.ico" />
    </Head>
      <Component {...pageProps} />
    </>
  )
}

