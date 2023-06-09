import React from 'react'
import DatesCardContainer from '../components/DatesCardContainer'
import C1 from '../components/Header'
import Footer from '../components/Footer'
import './Register.css'


const Register = () => {
  return (
    <div className='page_container_reg'>
        <C1/>
        <DatesCardContainer/>

        <button className='login_button'>Login</button> <button className='singin_button'>Sing in</button>
          
        <Footer/>

    </div>
  ) 
}

export default Register
