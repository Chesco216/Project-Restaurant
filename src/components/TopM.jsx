import React from 'react'
import './TopM.css'
//import {FaArrowLeft} from 'react-icons/fa'
import { IoIosArrowBack } from 'react-icons/io';



class TopM extends React.Component{
  render(){
    const { title } = this.props;
      return (
        <section className='Bar'>
            <div className='Top-R'>
                <IoIosArrowBack  className='icon' style={{strokeWidth: '5px'}}/>
                
                <p>{title}</p>
    
            </div>
        </section> 
      )
  
    }
  }


export default TopM