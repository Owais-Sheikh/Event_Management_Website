import '@/styles/globals.css'
import Navbar from '../pages/component/navbar'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Navbar />
  <Component {...pageProps} />
  </>
}
