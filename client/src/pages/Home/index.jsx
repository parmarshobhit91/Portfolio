import React from 'react'
import Header from '../../components/Header'
import Intro from './intro'

const Home = () => {
  return (
    <div>
        <Header/>
    <div className='bg-primary px-40'>
        <Intro/>
    </div>
    </div>
  )
}

export default Home
