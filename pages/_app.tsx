import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CssBaseline } from '@mui/material'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Artist</title> 
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      </Head>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}
