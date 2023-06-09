import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import bg from '../public/first.jpg'
import bg1 from '../public/second.jpg'
import bg2 from '../public/third.jpg'
import bg3 from '../public/forth.jpg'
import Navbar from '../pages/component/navbar'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })


export default function Home(props:any) {

  return (
    <>
      <Head>
        <title>Owais EventPlanner</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className="container  px-4 md:px-10 bg-cover bg-center bg-[url('../public/aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg')] h-64 md:h-96">
        <div className="md:w-full text-center py-14 md:py-24">
          <h1 className='text-2xl md:text-5xl font-bold md:font-bold mb-7 md:mb-10 text-white'>Life is an event. Make it memorable.</h1>
          <Link href={props.token.value?'/events':'/Login'}><button type="button" className="p-2 mt-7 md:mt-10 border rounded-xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
            Register Now
          </button></Link></div>
          
          <h1 className='mt-10 md:mt-20 text-center text-2xl md:text-4xl font-bold'>Our Services</h1>
          <div className='mt-2 h-1 md:mb-20 mb-10 rounded-sm w-32 mx-auto bg-green-600'></div>

        <div className='flex justify-evenly md:flex-row flex-col'>
          <div className=' md:mr-20 mb-10 '>
            <Image src={bg} alt='first' width={1600} />
          </div>
          <div>
            <h1 className='md:text-4xl text-xl font-bold mb-5 md:mb-10 md:mt-14'>Wedding Event</h1>
            <p className='mb-10'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus ipsam assumenda fugit, voluptate eaque error saepe quaerat libero, ut harum a cumque obcaecati excepturi modi placeat explicabo! Soluta, dolorem?</p>
            <button className={styles.btn}> Book Me </button>
          </div>
        </div>
        <div className='mt-16 flex justify-evenly md:flex-row flex-col'>
          <div className='md:mr-20'>
            <h1 className='md:text-4xl text-xl font-bold mb-5 md:mb-10 md:mt-14'>Mehndi Event</h1>
            <p className='mb-10'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus ipsam assumenda fugit, voluptate eaque error saepe quaerat libero, ut harum a cumque obcaecati excepturi modi placeat explicabo! Soluta, dolorem?</p>
            <button className={styles.btn}> Book Me </button>
          </div>
          <div className=' mb-10 '>
            <Image src={bg1} alt='first' width={1600} />
          </div>
        </div>
        <div className='mt-16 flex justify-evenly md:flex-row flex-col'>
          <div className=' md:mr-20 mb-10 '>
            <Image src={bg2} alt='first' width={1600} />
          </div>
          <div>
            <h1 className='md:text-4xl text-xl font-bold mb-5 md:mb-10 md:mt-14'>Party Event</h1>
            <p className='mb-10'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus ipsam assumenda fugit, voluptate eaque error saepe quaerat libero, ut harum a cumque obcaecati excepturi modi placeat explicabo! Soluta, dolorem?</p>
            <button className={styles.btn}> Book Me </button>
          </div>
        </div>
        <div className='mt-16 flex justify-evenly md:flex-row flex-col'>
          <div className=' md:mr-20'>
            <h1 className='md:text-4xl text-xl font-bold mb-5 md:mb-14 md:mt-28'>Iftari Event</h1>
            <p className='mb-10 md:mb-14'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus ipsam assumenda fugit, voluptate eaque error saepe quaerat libero, ut harum a cumque obcaecati excepturi modi placeat explicabo! Soluta, dolorem?</p>
            <button className={`${styles.btn} mb-10`}> Book Me </button>
          </div>
          <div className=' mb-10 '>
            <Image src={bg3} alt='first' width={1600} height={500} />
          </div>
        </div>
      </main>
    </>
  )
}
