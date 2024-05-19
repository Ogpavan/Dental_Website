import React from 'react'
import map from '../assets/map.png'
import img1 from '../assets/10.png'
import img2 from '../assets/11.png'
import img3 from '../assets/12.png'
import img4 from '../assets/13.png'
import { LucidePhoneIncoming, Mail, Timer } from 'lucide-react'

function Contact() {
  return (
    <div>
      <div>
        <h1 className='text-4xl font-semibold text-[#011632] text-center py-7'>Get in touch</h1>
        <p className='text-[#3C4959] text-center px-6 lg:px-0'>We are always ready to answer your questions</p>
        <div className='lg:flex lg:flex-row-reverse justify-evenly py-6'>
        <div className="bg-[#E6F6FE] ">
    <div className="container mx-auto py-12">
        <div className="max-w-lg mx-auto px-4">
            <h2 className="text-3xl font-semibold text-[#011632] mb-4">
                How can we help you
            </h2>
            <p className="text-gray-700 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis velit
                eget nisi lobortis dignissim.
            </p>
            <form className="bg-white rounded-lg px-6 py-8 shadow-md">
                <div className="mb-4">
                    <label className="block text-[#011632] font-bold mb-2" for="name">Name</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name" type="text" placeholder="Enter your name"/>
                </div>
                <div className="mb-4">
                    <label className="block text-[#011632] font-bold mb-2" for="email">Email</label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" type="email" placeholder="Enter your email"/>
                </div>
                <div className="mb-4">
                    <label className="block text-[#011632] font-bold mb-2" for="message">Message</label>
                    <textarea
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message" rows="6" placeholder="Enter your message"></textarea>
                </div>
                <div className="flex justify-end">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        Book Appointment
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

<div className='flex flex-col justify-center items-center'>
  <div>
 <img src={map}/>
 </div>
 <div className=' space-y-8'>
  <div className=' shadow-[0_8px_30px_rgb(0,0,0,0.12)]  flex px-3 py-5 space-x-3 '>
    <p className='text-white bg-blue-500 w-10 h-10 rounded-full flex justify-center items-center'><Timer/></p>
    <p>
    <p className='font-semibold'>Office timings</p>
    <p>Monday to Sunday(10:00 am to 9:00 pm)</p></p>
  </div>

  <div className=' shadow-[0_8px_30px_rgb(0,0,0,0.12)]  flex px-3 py-5 space-x-3 '>
    <p className='text-white bg-blue-500 w-10 h-10 rounded-full flex justify-center items-center'><Mail/></p>
    <p>
    <p className='font-semibold'>Email Address</p>
    <p>dentalmental@gmail.com</p></p>
  </div>

  <div className=' shadow-[0_8px_30px_rgb(0,0,0,0.12)]  flex px-3 py-5 space-x-3 '>
    <p className='text-white bg-blue-500 w-10 h-10 rounded-full flex justify-center items-center'><LucidePhoneIncoming/></p>
    <p>
    <p className='font-semibold'>Phone Number</p>
    <p>+91 7302667115</p></p>
  </div>

  
 </div>
</div>
        </div>
      </div>
    </div>
  )
}

export default Contact