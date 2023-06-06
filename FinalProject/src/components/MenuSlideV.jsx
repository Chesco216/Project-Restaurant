import React from 'react'
import menu from '../assets/menu.json'
import MenuCard from './MenuCard'
import './MenuSlideV.css'

const MenuSlideV = () => {
  return (
    <div>
        <div className="menuSlideV">
        {
            menu.map((menu) => (
                <MenuCard img={menu.img} key={menu.id}/>
            ))
        }
        </div>
    </div>
  )
}

export default MenuSlideV