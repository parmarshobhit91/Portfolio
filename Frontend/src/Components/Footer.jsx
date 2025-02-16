import React from 'react'
import githubLogo from '../assets/github.png'
import instagramLogo from '../assets/instagram.png'
import linkedInLogo from '../assets/linkedin.png'

const socialLinks = [
    {
        href: "https://github.com/parmarshobhit91",
        src: githubLogo,
        alt: "GitHub",
      },
      {
        href: "https://www.instagram.com/_._shobhit?igsh=ZGtmd3NuNGJnd3Z1",
        src: instagramLogo,
        alt: "Instagram",
      },
      {
        href: "https://www.linkedin.com/in/shobhit-parmar-a38830339/",
        src: linkedInLogo,
        alt: "LinkedIn",
      },
]

function Footer() {
  return (
    <footer className='shadow-md border border-gray-500 text-black py-8 text-center flex flex-row items-center justify-center gap-8'>
        <div className="flex flex-col">
        <p className="mb-2">&copy; 2025 Shobhit Parmar. All rights reserved.</p>
        <p className="mb-4">Connect with me on Social Media</p>
        </div>

        <div className="flex justify-center gap-12">
        {socialLinks.map((item) => {
            return (
                <a key={item.alt} href={item.href} target="_blank" rel="noreferrer">  
                    <img className="h-8 transition-transform hover:scale-110" src={item.src} alt={item.alt}/>
                </a>
            )
        })}    
        </div>
           
    </footer>
  )
}


export default Footer
