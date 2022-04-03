import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className='heading'>
        <h1>Tasbeeh</h1>
      </div>
      <div className='menu'>
        <NavLink to="/SubhanAllah">SubhanAllah</NavLink>
        <NavLink to="/Alhamdulillah">Alhamdulillah</NavLink>
        <NavLink to="/Allahuakbar">Allahu Akbar</NavLink>
      </div>
    </div>
  )
}

export default Header
