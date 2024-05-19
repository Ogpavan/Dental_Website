import React from 'react';
import { motion } from 'framer-motion';
import aboutpic from '../assets/about.png';
import aboutdoc from '../assets/aboutdoc.png';

function About() {
  return (
    <motion.div
      className='lg:px-24 px-5'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='hidden lg:block text-center py-5 px-5'>
        <h1 className='text-4xl font-semibold text-[#011632] py-4'>About Us</h1>
      </div>

<div className='lg:flex lg:justify-between'>
        <div>
        <div className='text-2xl text-[#011632] font-semibold  pt-2  '>
            Our Mission
        </div>
        <div className='  py-5  lg:w-[40rem]'>
            <p className='text-md text-[#3C4959] '>At Northern Heights Dental, people come first. We help each of our patients to achieve optimal wellness and health by using a whole body approach to oral health. This means not just focusing on cavities, but focusing on; cranio-facial development, bite and joint balance, oral flora, proper muscle balance/function, and bio-compatibility of dental materials. Great care and planning ensure that everything we do helps promote overall health and well being.</p>

            <h1 className='font-bold text-lg py-3 text-[#011632]'>More than anything else we love creating happy, healthy smiles.</h1>

            <p className='text-md text-[#3C4959] '>We work hard to stay up to date with the most advanced techniques and technologies to ensure that our patients receive the best care possible. Our office utilizes 3D CBCT radiographs to allow for guided surgical and endodontic protocols. This enables these procedures to performed digitally before they are performed surgically to ensure optimal results. 3D imaging also is utilized for the analysis of airway growth and development. We also use the best 3D optical scanner for all of our dental restoration and Invisalign impressions. Dr Williams is a strong advocate for using microsurgical techniques, this means less discomfort and faster healing times.</p>
        </div>
        </div>
        <div>
            <img src={aboutpic} alt='' className='px-4 py-10'/>
        </div>
    </div>
    <div className='lg:text-center lg:flex lg:justify-center lg:items-center'>
        <div className='py-10'>
        <h1 className='text-4xl font-semibold text-[#011632] py-3'>Meet our specialists</h1>
        <p className='text-[#3C4959] lg:w-[38rem]  '>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
    </div>
    </div>

    <div className='flex flex-col gap-y-5 my-3'>
        <div className='lg:flex lg:justify-between bg-[#E6F6FE] p-5'>
            <div>
            <img src={aboutdoc} alt=''/>
            </div>
            <div className='space-y-4 lg:w-[54rem] lg:pl-7'>
                <p>
                <h1 className='text-3xl font-semibold text-[#011632] py-5'>Dr. Smith</h1>
                <p className='text-[#3C4959]'>( Specility in General & Cosmetic Service )</p>
                </p>
                <p className='text-[#3C4959]'>Dr. Brent provides general and cosmetic dentistry services at Northern Heights Dental in Flagstaff, Arizona. He has extensive experience in general and cosmetic dentistry, including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures.  Dr. Brent and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist.</p>
                <button className='bg-[#1376F8] text-white px-4 py-2 rounded-md'>Book an appointment</button>
            </div>
        </div>
        <div className='lg:flex lg:justify-between bg-[#E6F6FE] p-5'>
            <div>
            <img src={aboutdoc} alt=''/>
            </div>
            <div className='space-y-4 lg:w-[54rem] lg:pl-7'>
                <p>
                <h1 className='text-3xl font-semibold text-[#011632] py-5'>Dr. Smith</h1>
                <p className='text-[#3C4959]'>( Specility in General & Cosmetic Service )</p>
                </p>
                <p className='text-[#3C4959]'>Dr. Brent provides general and cosmetic dentistry services at Northern Heights Dental in Flagstaff, Arizona. He has extensive experience in general and cosmetic dentistry, including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures.  Dr. Brent and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist.</p>
                <button className='bg-[#1376F8] text-white px-4 py-2 rounded-md'>Book an appointment</button>
            </div>
        </div>
        <div className='lg:flex lg:justify-between bg-[#E6F6FE] p-5'>
            <div>
            <img src={aboutdoc} alt=''/>
            </div>
            <div className='space-y-4 lg:w-[54rem] lg:pl-7'>
                <p>
                <h1 className='text-3xl font-semibold text-[#011632] py-5'>Dr. Smith</h1>
                <p className='text-[#3C4959]'>( Specility in General & Cosmetic Service )</p>
                </p>
                <p className='text-[#3C4959]'>Dr. Brent provides general and cosmetic dentistry services at Northern Heights Dental in Flagstaff, Arizona. He has extensive experience in general and cosmetic dentistry, including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures.  Dr. Brent and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist.</p>
                <button className='bg-[#1376F8] text-white px-4 py-2 rounded-md'>Book an appointment</button>
            </div>
        </div>

    </div>





    </motion.div>
    
  )
}

export default About