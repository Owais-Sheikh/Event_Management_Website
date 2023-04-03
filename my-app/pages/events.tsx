import React from 'react'
import styles from '../styles/event.module.css'
import style from '../styles/Home.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const events = () => {
    const router = useRouter();
    useEffect(() => {
      var token = localStorage.getItem('token');
      if(token){

      }
      else{
        router.push('http://localhost:3000')
      }
    }, [router.query])
    
    return (
        <div className="px-16 container bg-fixed bg-cover bg-center bg-[url('../public/aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg')] h-64 md:h-96">
            <h1 className='text-2xl md:text-5xl pt-40 ml-10 font-bold md:font-bold mb-7 md:mb-10 text-white'>Event</h1>
            <h1 className='mt-44 md:mt-64 text-center text-2xl md:text-4xl font-bold'>Create Event</h1>
          <div className='mt-2 h-1 md:mb-20 mb-10 rounded-sm w-32 mx-auto bg-green-600'></div>
            <div className='mt-20 flex justify-center items-center flex-wrap'>
                
                <div className='flex items-start flex-col'>
                
                <label className='mb-2 text-green-800 font-semibold' htmlFor="">Name</label>
                <input className={`${styles.input} mr-10 mb-14`} name="text"  type="text" /></div>
                <div className='flex items-start flex-col'>
                <label className='mb-2 text-green-800 font-semibold' htmlFor="">Email</label>
                <input className={`${styles.input} mr-10 mb-14`} name="text"  type="email" /></div>
                <div className='flex items-start flex-col'>
                <label className='mb-2 text-green-800 font-semibold' htmlFor="">Phone</label>
                <input className={`${styles.input} mr-10 mb-14`} name="text"  type="tel" /></div>
                <div className='flex items-start flex-col'>
                <label className='mb-2 text-green-800 font-semibold' htmlFor="">Event Type</label>
                <input className={`${styles.input} mr-10 mb-14`} name="text"  type="text" /></div>
                <div className='flex items-start flex-col'>
                <label className='mb-2 text-green-800 font-semibold' htmlFor="">Event Description</label>
                <textarea className={`${styles.input} mr-10 mb-14`} name="text"  cols={30} rows={2} /></div>
                <div className='flex items-start flex-col'>
                <label className='mb-2 text-green-800 font-semibold' htmlFor="">Event Date</label>
                <input className={`${styles.input} mr-10 mb-14`} name="text"  type="date" /></div>
                <div className='flex items-start flex-col'>
                <label className='mb-2 text-green-800 font-semibold' htmlFor="">Start Time</label>
                <input className={`${styles.input} mr-10 mb-14`} name="text"  type="time" /></div>
                <div className='flex items-start flex-col'>
                <label className='mb-2 text-green-800 font-semibold' htmlFor="">End Time</label>
                <input className={`${styles.input} mr-10 mb-14`} name="text" type="time" /></div>
                <div className='flex items-start flex-col'>
                <label className='mb-2 text-green-800 font-semibold' htmlFor="">Total Guest</label>
                <input className={`${styles.input} mr-10 mb-14`} name="text"  type="text" /></div>
                <button className={`${style.btn} mb-10`}> Book Event </button>

            </div>
        </div>
    )
}

export default events