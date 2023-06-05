/* eslint-disable react-hooks/rules-of-hooks */
import SortBy from 'sort-by'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import mongoose from "mongoose";
import event from '@/tables/event'
import { FiFilter } from 'react-icons/fi'
import styles from '../styles/event.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';

const myEvents = (props: any):any => {
  const router = useRouter();
  useEffect(() => {
    if(!props.token.value){
      router.push('http://localhost:3000')
    }
    
  }, [props.token.value, router, router.query])
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [sorting, setsorting] = useState<boolean>(true)
  const [dropFilter, setdropFilter] = useState<boolean>(false)
  const [droplearn, setdroplearn] = useState<boolean>(false)

  var c = Object.values(props.event);
  const sortByName = () => {
    var byName: any = c.sort(function (a:any, b:any) {
      var x = a.eventType.toLowerCase();
      var y = b.eventType.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    })
    return byName;
  }
  const sortByDate = () =>{
    var byDate:any =  c.sort(SortBy('eventDate'));
    return byDate;
  }


  
  

  return (<>
  <div className='flex flex-row justify-center items-center mt-20'>
    <div className='mr-20'>
    <h1 className=' text-center text-2xl md:text-4xl font-bold'>Your Events</h1>
    <div className='mt-2 h-1 rounded-sm w-32 mx-auto bg-green-600'></div> 
    </div> 
    <FiFilter onMouseOver={()=>{setdropFilter(true)}} onMouseLeave={()=>{setdropFilter(false)}} className='text-2xl cursor-pointer'/>    
    {dropFilter && <ul className={`bg-gray-400 absolute ${styles.h} p-5`} onMouseOver={()=>{setdropFilter(true)}} onMouseLeave={()=>{setdropFilter(false)}} >
        <li className='cursor-pointer hover:text-white text-black font-bold text-sm mb-2' onClick={()=>{setsorting(true)}}>By Name</li>
        <li className='cursor-pointer hover:text-white text-black font-bold text-sm ' onClick={()=>{setsorting(false)}}>By Date</li>
      </ul>}</div>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {sorting && Object.keys(sortByName()).map((item: any) => {
            return <Link href={`http://localhost:3000/Events/${sortByName()[item].uniqueId}`} key={sortByName()[item]._id} className="p-4 md:w-1/3" ><div>
              <div id='sort' className='hover:opacity-40 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{sortByName()[item].eventType}</h1>
                  <p className="leading-relaxed mb-3">{sortByName()[item].eventdesc.substr(0,100)}...</p>
                  <div className="flex items-center flex-wrap ">
                    <div id='learnMore' className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      {sortByName()[item].eventDate}
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">

                      {sortByName()[item].totalGuest}
                    </span>
                  </div>
                </div>
              </div>
            </div></Link>
          })}
          {!sorting && Object.keys(sortByDate()).map((item: any) => {
            return <Link key={sortByDate()[item]._id} href={`http://localhost:3000/Events/${sortByDate()[item].uniqueId}`} className="p-4 md:w-1/3"><div>
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{sortByDate()[item].eventType}</h1>
                  <p className="leading-relaxed mb-3">{sortByDate()[item].eventdesc.substr(0,100)}</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      {sortByDate()[item].eventDate}
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">

                      {sortByDate()[item].totalGuest}
                    </span>
                  </div>
                </div>
              </div>
            </div></Link>
          })}
        </div>
      </div>
    </section></>
  )
}
export async function getServerSideProps() {
  if (!mongoose.connections[0].readyState) {
    var c:any = process.env.MONGODB_URI;
    await mongoose.connect(c)
  }
  const getEvent = await event.find({ "email": "owaisshk1501@gmail.com" });
  
  return {
    props: { event: JSON.parse(JSON.stringify(getEvent)) } // will be passed to the page component as props
  }
}
export default myEvents