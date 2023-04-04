import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Navbar from './component/navbar';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [token, settoken] = useState<any>({value : null})
  useEffect(() => {
    var tkn = localStorage.getItem("token")
    if(tkn){
      settoken({value : tkn})
    }
  }, [router.query])
  const logOut = ()=>{
    localStorage.removeItem("token");
    settoken({value:null})
  }
  
  return <>
  <Navbar logOut = {logOut} token={token}/>
  <Component {...pageProps} token={token} />
  </>
}
