import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const result = await response.json()
      setStatus(result.message)
      setFormData({ name: '', email: '', mobileNumber: '', message: '' })
    } catch (error) {
      setStatus('Error sending email')
    }
  }

  return (
    <div className='h-screen sm:h-[80vh] md:h-[90vh] lg:h-[90vh] p-8 mt-72'>
      <h4 className='text-xl font-bold'>Contact Me</h4>
      <div className='flex flex-row items-center justify-around space-y-4 pb-8 '>

        <div className='flex flex-col items-start justify-start space-y-8  p-8'>
            <div className='flex flex-col gap-4 p-8 font-display'>
                <h1 className='text-2xl font-bold'>Address</h1>
                <p>Current: Mahesh Nagar, Indore, 452002, Madhya Pradesh</p>
                <p>Permanent: 109, Naharpura Road, Ratlam, 457001, Madhya Pradesh</p>
            </div>
            <div className='flex flex-col gap-4 p-8 font-display'>
                <h1 className='text-2xl font-bold'>Contact Me</h1>
                <p>Mobile: +91-9644100906</p>
                <p>Email: parmarshobhit91@gmail.com</p>
            </div>
        </div>
        
        <div className='flex flex-col items-center justify-center space-y-4 w-[1024px]'>
        <h4 className='text-xl font-bold'>Please input your details. I will contact you shortly...</h4>
        <div className="max-w-lg mx-auto border border-black p-6 rounded-lg shadow-md">

<form onSubmit={handleSubmit} className="space-y-4">
  <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" />
  <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" />
  <input type="tel" name="mobileNumber" placeholder="Your Contact Number" required value={formData.mobileNumber} onChange={handleChange} className="w-full p-2 border rounded" />
  <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange} className="w-full p-2 border rounded"></textarea>
  <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Send</button>
</form>
{status && <p className="mt-2 text-center text-sm">{status}</p>}
</div>
        </div>
      </div>
    </div>
  )
}

export default Contact
