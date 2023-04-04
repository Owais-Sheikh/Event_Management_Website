import React from 'react'
import styles from '../styles/Login.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

const SignUp = () => {
  const router = useRouter();
  const [showPass, setshowPass] = useState<boolean>(false)
  const [name, setname] = useState<string>('')
  const [email, setemail] = useState<string>('')
  const [password, setpassword] = useState<string>('')
  const SetnameValue = (e: any) => {
    e.preventDefault();
    setname(e.target.value)
    console.log(name)
  }
  const SetemailValue = (e: any) => {
    e.preventDefault();
    setemail(e.target.value)
    console.log(email)
  }
  const SetpasswordValue = (e: any) => {
    e.preventDefault();
    setpassword(e.target.value)
    console.log(password)
  }

  const showPassword = () => {
    setshowPass(!showPass)
  }

  const submitInfo = async (e: any) => {
    e.preventDefault();
    const data = { name, email, password };
    var res = await fetch('http://localhost:3000/api/signup', {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    var responce = await res.json();
    console.log(responce)
    if (responce.success) {
      toast.success('Your account has been created 😍', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        router.push('http://localhost:3000/Login')
      }, 3000);
    }
    else {
      
    }
    setname('');
    setemail('');
    setpassword('');
  }
  return (
    <><ToastContainer
      position="top-right"
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
      <div className='flex items-center justify-center h-[100vh] bg-gradient-to-r from-green-400 to-blue-500 px-4 py-3'>
        <form className={styles.form} onSubmit={submitInfo}>
          <p className={styles.form_title}>Sign Up</p>
          <div className={styles.input_container}>
            <input placeholder="Enter Name" type="text" value={name} name='name' onChange={SetnameValue} />
            <span>
              <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
              </svg>
            </span>
          </div>
          <div className={styles.input_container}>
            <input placeholder="Enter email" type="email" value={email} name='email' onChange={SetemailValue} />
            <span>
              <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
              </svg>
            </span>
          </div>
          <div className={styles.input_container}>
            <input placeholder="Enter password" value={password} type={`${showPass ? "text" : "password"}`} onChange={SetpasswordValue} name='password' />

            <span>
              <svg onClick={showPassword} stroke="currentColor" viewBox="0 0 24 24" fill="none" className='cursor-pointer'>
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
              </svg>
            </span>
          </div>
          <button className={styles.submit} type="submit">
            Sign Up
          </button>

          <p className={styles.signup_link}>
            If you have an account
            <Link href={'/Login'}> Sign In</Link>
          </p>
        </form>

      </div></>
  )
}

export default SignUp


