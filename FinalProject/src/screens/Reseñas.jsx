import React from 'react'
import { ReviewCard } from '../components/ReviewCard'
import { ReviewCardContainer } from '../components/ReviewCardContainer'
import { ReviewContainer } from '../components/ReviewContainer'
import { Icon } from '@iconify/react';
import Footer from '../components/Footer'
import Header from '../components/Header'

export const Reseñas = () => {
  return (
    <div className='app'>
       <Header />
       <ReviewContainer/>
       <Footer/>
    </div>
  )
}