import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CssBaseline } from '@mui/material'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
       <Head><title>Artist</title></Head>
       <CssBaseline />
       <Component {...pageProps} />
    </>
    )
}
