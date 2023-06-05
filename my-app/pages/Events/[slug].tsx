/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import mongoose from "mongoose";
import event from '@/tables/event'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const slug = (props:any) => {
  const router = useRouter();
  useEffect(() => {
    if(!props.token.value){
      router.push('http://localhost:3000');
    }
    localStorage.setItem("slug" , JSON.stringify(props.event));
  }, [props.event, props.token.value, router, router.query])
  
    const deleteEvent = async (e: any) => {
      e.preventDefault();
      const data = {uniqueId : props.event.uniqueId };
      var res = await fetch('http://localhost:3000/api/Event/deleteEvent', {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      var responce = await res.json();
      console.log(responce);
      if (responce.success) {
        toast.success('Event Deleted Successfully 😍', {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          router.push('http://localhost:3000/myEvents')
        }, 2000);
      }
      else {
        toast.error("Event can't be deleted 😔", {
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
      
    }

  return (
    <section className={`text-gray-600 body-font`}>
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
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">{props.event.eventType}
      </h1>
      <p className='text-xs text-gray-500 mb-5'>Organized by {props.event.name}</p>
      <p className="text-sm mb-8 leading-relaxed">{props.event.eventdesc}</p><div className='flex'>
      <h1 className='font-semibold  text-gray-900 mr-2'>Date : </h1><p className="text-sm mb-2 leading-relaxed">{props.event.eventDate}</p></div>
      <div className='flex'>
      <h1 className='font-semibold text-gray-900 mr-2'>StartTime : </h1><p className="text-sm mb-2 leading-relaxed">{props.event.startTime}</p></div>      
      <div className='flex'>
      <h1 className='font-semibold text-gray-900 mr-2'>EndTime : </h1><p className="text-sm mb-2 leading-relaxed">{props.event.endTime}</p></div>
      <div className='flex'>
      <h1 className='font-semibold text-gray-900 mr-2'>Total Guest : </h1><p className="text-sm mb-6 leading-relaxed">{props.event.totalGuest}</p></div>
      
      <div className="flex justify-center">
        <Link href={'/Uevent'}><button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Update</button></Link>
        <button onClick={deleteEvent} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Cancel</button>
      </div>
    </div>
  </div>

</section>
  )
}
export async function getServerSideProps(context:any) {
    if (!mongoose.connections[0].readyState) {
      var c:any = process.env.MONGODB_URI;
      await mongoose.connect(c);
    }
    const getEvent = await event.findOne({ "uniqueId": context.query.slug });
    return {
      props: { event: JSON.parse(JSON.stringify(getEvent)) } // will be passed to the page component as props
    }
  }
export default slug