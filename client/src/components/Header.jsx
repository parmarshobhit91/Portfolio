import React from 'react'
import exampleImage from '../assets/logo.png'

function Header() {
  return (
    <div className='p-5 bg-primary flex justify-between'>
        <h1 className='text-tertiary text-4xl font-semibold'>S</h1>
       
       <img className='h-12 w-auto' src={exampleImage}></img>

        <h1 className='text-tertiary text-4xl font-semibold'>P</h1>
    </div>
  )
}

export default Header
