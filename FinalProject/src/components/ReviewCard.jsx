import React from 'react'
import "./ReviewCard.css"
export const ReviewCard = () => {
  return (
    <div className='review-container'>
        <div className='caja-top'>
            <img src='/static/images/imgUsuario1.svg' alt=''/>
            <div className='caja-top-name'>
                <span>Pablo</span>
                <i>
                    <img src='/static/images/Star.svg' alt=''/>
                    <img src='/static/images/Star.svg' alt=''/>
                    <img src='/static/images/Star.svg' alt=''/>
                    <img src='/static/images/Star.svg' alt=''/>
                    <img src='/static/images/Star.svg' alt=''/>
                </i>
            </div>
        </div>
        <div className='review-comentario'>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem recusandae pariatur eaque neque earum distinctio, cum quidem.
            </p>

        </div>
    </div>
  )
}