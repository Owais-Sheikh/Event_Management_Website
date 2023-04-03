import React from 'react'
import styles from '../styles/Login.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter();
  const [showPass, setshowPass] = useState<boolean>(false)
  const [email, setemail] = useState<string>('')
  const [password, setpassword] = useState<string>('')
  const showPassword = ()=>{
    setshowPass(!showPass)
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


  const submitInfo = async (e: any) => {
    e.preventDefault();
    const data = { email, password };
    var res = await fetch('http://localhost:3000/api/login', {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    var responce = await res.json();
    console.log(responce)
    if (responce.success) {
      toast.success('Login Successfully 😍', {
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
        router.push('http://localhost:3000')
        localStorage.setItem("token" , responce.token)
      }, 1000);
    }
    else {
      toast.error('Invalid input 😔', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    setemail('');
    setpassword('');
  }
  return (
    <div className='flex items-center justify-center h-[100vh] bg-gradient-to-r from-green-400 to-blue-500 px-4 py-3'>
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
    <form className={styles.form} onSubmit={submitInfo}>
       <p className={styles.form_title}>Sign in to your account</p>
        <div className={styles.input_container}>
          <input placeholder="Enter email" type="email" value={email}  onChange={SetemailValue}/>
          <span>
            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
            </svg>
          </span>
      </div>
      <div className={styles.input_container}>
          <input placeholder="Enter password" onChange={SetpasswordValue} value={password} type={`${showPass ? "text":"password" }`}/>

          <span>
            <svg onClick={showPassword} stroke="currentColor" viewBox="0 0 24 24" fill="none" className='cursor-pointer'>
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
            </svg>
          </span>
        </div>
         <button className={styles.submit} type="submit">
        Sign in
      </button>

      <p className={styles.signup_link}>
        No account?
        <Link href={'/SignUp'}>Sign up</Link>
      </p>
   </form>

    </div>
  )
}

export default Login