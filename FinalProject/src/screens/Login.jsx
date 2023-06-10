import React from 'react'
import  EmailCardContainer  from '../components/EmailCardContainer'
import  C1  from '../components/Header'
import Footer  from '../components/Footer'
import './Login.css'

const Login = () => {
  return (
    <div className='.page_container_log'>
        <C1/>
        <EmailCardContainer/>
        <button className='login_button2'>Login</button>
        <Footer/>

    </div>
  )
}

export default Login
