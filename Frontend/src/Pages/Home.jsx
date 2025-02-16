import React from 'react'

function Home() {
  return (
    <div className='h-screen sm:h-[80vh] md:h-[90vh] lg:h-[90vh] p-8 pt-32'>
      <div className='p-8 flex flex-col gap-16'>
      <h1 className='text-5xl'>Hey,</h1>
      <h2 className='text-8xl text-gray-600'>I'm Shobhit Parmar....</h2>
      <h1 className='text-4xl text-gray-600'>I'm a passionate Computer Science Engineer.</h1>
      <p className='text-2xl'>Software Engineering is less about the code that is written and more about the design decisions taken, the technologies chosen, and the overall architecture of a system. When engineering a solution, you need to consider the broadest context that the system operates in, hardware requirements, scalability, design and architecture patterns, developer experience, maintainability, deliverability, and business requirement.</p>
      <p className='text-2xl'>A software engineer is a developer, and a developer is also a programmer, but a programmer or developer is not necessarily a software engineer. It all depends on the context and scale of the work being undertaken. But ultimately, in my opinion, the engineering in software has little to do with the code you write and more to do with the whys behind the system you build.</p>
      <p className='text-2xl'></p>
      </div>
    </div>
  )
}

export default Home
