import React from 'react'
import footer from '../assets/footer.png'
function Footer() {
  return (
    <div className='lg:px-24  '>
        <div className='text-white lg:flex lg:justify-between lg:item-center bg-[#011632] lg:rounded-md  space-y-7 py-20 lg:py-10 px-6'>

          <div className='lg:w-[60%] lg:py-5 lg:space-y-8 lg:px-4'>
        <h1 className='text-4xl font-semibold'>Website builder that's gonna shake the game rules up.</h1>
        <p className='text-lg'>We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</p>
        <button className='bg-[#1376F8] text-white px-4 py-2 mt-2 rounded-md text-lg'>Learn More</button>
        </div>
        <div className='lg:px-4 lg:py-[-3]'>
        <img src={footer}/>
        </div>
        </div>
        <div className=' space-y-10 py-6 px-3 lg:space-y-3 text-center'>
            <p>All our PRO level features at your fingertips.</p>
            <hr/>
            <div>
                <p>Copyright © 2022. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer