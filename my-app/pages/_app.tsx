import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from './component/navbar';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [token, settoken] = useState<any>({value : null})
  const [eventSlug, setslug] = useState<any>({value : {}})

  useEffect(() => {
    var tkn = localStorage.getItem("token")
    var event = localStorage.getItem("slug");
    if(tkn){
      settoken({value : tkn})
    }
    if(event){
      setslug({value : JSON.parse(event)})
    }
  }, [router.query])
  const logOut = ()=>{
    localStorage.removeItem("token");
    settoken({value:null})
  }
  
  return <>
  <Navbar logOut = {logOut} token={token}/>
  <Component {...pageProps} token={token} slug = {eventSlug}/>
  </>
}
