import React from 'react'
import { ReviewCard } from '../components/ReviewCard'
import { ReviewCardContainer } from '../components/ReviewCardContainer'
import { ReviewContainer } from '../components/ReviewContainer'
import C1 from '../components/Header'
import { Icon } from '@iconify/react';
import Footer from '../components/Footer'

export const Reseñas = () => {
  return (
    <div className='app'>
       <C1/>
       <ReviewContainer/>
       <Footer/>
    </div>
  )
}