import React from 'react'
import Card from '../Components/Card'
import portfolioimg from "../assets/portfolioimg.png"

const cardData = [
    {
        title: 'Portfolio',
        description: 'My personal portfolio website using MERN Stack',
        image: portfolioimg,
        githublink: 'https://github.com/parmarshobhit91/Portfolio'
        
    },
    {
        title: 'Card 2',
        description: 'This is card 2',
        image: 'https://via.placeholder.com/150',
        githublink: 'https://via.placeholder.com/150'
    },
    {
        title: 'Card 3',
        description: 'This is card 3',
        image: 'https://via.placeholder.com/150',
        githublink: 'https://via.placeholder.com/150'
    },
    {
        title: 'Card 4',
        description: 'This is card 4',
        image: 'https://via.placeholder.com/150',
        githublink: 'https://via.placeholder.com/150'
    },
]


function Projects() {
    return (
        // <div className='h-screen sm:h-[80vh] md:h-[90vh] lg:h-[90vh] p-8'>
        //     <div className='p-8'>
        //         <h4 className='text-xl font-bold text-left mt-8'>Projects</h4>
        //         <h1 className='text-4xl font-bold text-left mt-8'>Projects done by me</h1>
        //         <div className='flex flex-wrap justify-start gap-8 mx-auto p-6'>
        //             {cardData.map((item) => (
        //                 <Card key={item.title} title={item.title} {...item} />
        //             ))}
        //         </div>
        //     </div>
        // </div>
         <div className='h-screen sm:h-[80vh] md:h-[90vh] lg:h-[90vh] p-8'>
            <div className='p-8'>
                <h4 className='text-xl font-bold text-left mt-8'>Projects</h4>
                <h1 className='text-4xl font-bold text-left mt-8'>Projects done by me</h1>
                <div className='flex flex-wrap justify-start gap-8 mx-auto p-6'>
                    {cardData.map((item) => (
                        <Card key={item.title} title={item.title} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
