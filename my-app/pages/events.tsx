/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import styles from '../styles/event.module.css'
import style from '../styles/Home.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const events = () => {
  const router = useRouter();
  const [name, setname] = useState<string>("")
  const [email, setemail] = useState<string>('')
  const [phone, setphone] = useState<string>('')
  const [eventType, setevenType] = useState<string>('')
  const [eventDesc, seteventDesc] = useState<string>('')
  const [eventDate, setdate] = useState<string>('')
  const [startTime, setStime] = useState<string>('')
  const [endTime, setEtime] = useState<string>('')
  const [totalGuest, setTGuest] = useState<string>('')
  const setValue = (e: any) => {
    e.preventDefault();
    if (e.target.name == "name") {
      setname(e.target.value);
      console.log(name);
    }
    else if (e.target.name == "email") {
      setemail(e.target.value);
    }
    else if (e.target.name == "phone") {
      setphone(e.target.value);
    }
    else if (e.target.name == "EventType") {
      setevenType(e.target.value);
    }
    else if (e.target.name == "Desc") {
      seteventDesc(e.target.value);
    }
    else if (e.target.name == "date") {
      setdate(e.target.value);
    }
    else if (e.target.name == "STime") {
      setStime(e.target.value);
    }
    else if (e.target.name == "ETime") {
      setEtime(e.target.value);
      console.log(endTime)
    }
    else if (e.target.name == "TGuest") {
      setTGuest(e.target.value);
 
    }
  }

  
  const submitInfo = async (e: any) => {
    e.preventDefault();
    const data = { name, email, phone, eventType, eventDesc, eventDate, startTime, endTime, totalGuest };
    var res = await fetch('http://localhost:3000/api/Event/addEvent', {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    var responce = await res.json();
    console.log(responce)
    if (responce.success) {
      toast.success('Event Created Successfully 😍', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    else {
      toast.error('Date not available 😔', {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setname('');
    setemail('');
    setevenType('');
    seteventDesc('');
    setphone('');
    setStime('');
    setEtime('');
    setdate('');
    setTGuest('');
  }
  return (
    <div className="px-16 container bg-fixed bg-cover bg-center bg-[url('../public/aditya-chinchure-ZhQCZjr9fHo-unsplash.jpg')] h-64 md:h-96">
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h1 className='text-2xl md:text-5xl pt-40 ml-10 font-bold md:font-bold mb-7 md:mb-10 text-white'>Event</h1>
      <h1 className='mt-44 md:mt-64 text-center text-2xl md:text-4xl font-bold'>Create Event</h1>
      <div className='mt-2 h-1 md:mb-20 mb-10 rounded-sm w-32 mx-auto bg-green-600'></div>
      <div className='mt-20 flex justify-center items-center flex-wrap'>

        <div className='flex items-start flex-col'>

          <label className='mb-2 text-green-800 font-semibold' htmlFor="">Name</label>
          <input className={`${styles.input} mr-10 mb-14`} onChange={setValue} value={name} name="name" type="text" /></div>
        <div className='flex items-start flex-col'>
          <label className='mb-2 text-green-800 font-semibold' htmlFor="">Email</label>
          <input className={`${styles.input} mr-10 mb-14`} onChange={setValue} value={email} name="email" type="email" /></div>
        <div className='flex items-start flex-col'>
          <label className='mb-2 text-green-800 font-semibold' htmlFor="">Phone</label>
          <input className={`${styles.input} mr-10 mb-14`} onChange={setValue} value={phone} name="phone" type="tel" /></div>
        <div className='flex items-start flex-col'>
          <label className='mb-2 text-green-800 font-semibold' htmlFor="">Event Type</label>
          <input className={`${styles.input} mr-10 mb-14`} onChange={setValue} value={eventType} name="EventType" type="text" /></div>
        <div className='flex items-start flex-col'>
          <label className='mb-2 text-green-800 font-semibold' htmlFor="">Event Description</label>
          <textarea className={`${styles.input} mr-10 mb-14`} onChange={setValue} value={eventDesc} name="Desc" cols={30} rows={2} /></div>
        <div className='flex items-start flex-col'>
          <label className='mb-2 text-green-800 font-semibold' htmlFor="">Event Date</label>
          <input className={`${styles.input} mr-10 mb-14`} onChange={setValue} value={eventDate} name="date" type="date" /></div>
        <div className='flex items-start flex-col'>
          <label className='mb-2 text-green-800 font-semibold' htmlFor="">Start Time</label>
          <input className={`${styles.input} mr-10 mb-14`} onChange={setValue} value={startTime} name="STime" type="time" /></div>
        <div className='flex items-start flex-col'>
          <label className='mb-2 text-green-800 font-semibold' htmlFor="">End Time</label>
          <input className={`${styles.input} mr-10 mb-14`} onChange={setValue} value={endTime} name="ETime" type="time" /></div>
        <div className='flex items-start flex-col'>
          <label className='mb-2 text-green-800 font-semibold' htmlFor="">Total Guest</label>
          <input className={`${styles.input} mr-10 mb-14`} onChange={setValue} value={totalGuest} name="TGuest" type="text" /></div>
        <button onClick={submitInfo} className={`${style.btn} mb-10`}> Book Event </button>

      </div>
    </div>
  )
}

export default events