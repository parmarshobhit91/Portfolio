import React from 'react'

function Card({ title, description, image}) {
  return (
    <div className=''>
         <div className='flex flex-col justify-center items-center h-[370px] w-[405px] bg-[rgba(255,255,255,0.9)] shadow-md rounded-xl'>   
            {image && <img className="w-[80px] h-[80px] object-cover rounded-xl" src={image} alt={title} />}
            <h1 className='text-2xl font-semibold text-gray-800 mt-4'>{title}</h1>
                <p className='text-xl font-medium text-gray-600 mt-1'>{description}</p>
         </div>
    </div>
  )
}

export default Card
