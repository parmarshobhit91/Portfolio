import React from 'react'

const Intro = () => {
    return (
        <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
            <h1 className='text-tertiary'>Hi, I am</h1>
            <h1 className='text-7xl text-secondary font-semibold'>Shobhit Parmar</h1>
            <h1 className='text-7xl text-tertiary font-semibold w-2/3'>I am a web-developer using MERN, a C++ enthusiast.</h1>
            <p className='text-tertiary w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reprehenderit omnis voluptatum veritatis. Dolorem veniam, tempora cumque nulla sed possimus praesentium. Numquam consectetur enim adipisci a eaque, dolorem ducimus praesentium.</p>
            <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get Started</button>
        </div>
    )
}

export default Intro
