import { persistor, store } from '@/redux/store'
import '@/styles/globals.css'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps }) {
  return(
    <Provider store={store}>
    <Head>
        <title>V99</title>
        <meta name="description" content="created using next js" />
        <link rel="icon" href="/star.ico" />
    </Head>
    <PersistGate loading={null} persistor={persistor}>
      <Component {...pageProps} />
    </PersistGate>  
    </Provider>
  )
}

