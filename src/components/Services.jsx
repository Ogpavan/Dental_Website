import React from 'react';
import teeth from '../assets/teeth.png';
import smile from '../assets/smile.png';
import implant from '../assets/implant.png';
import { CircleChevronRight } from 'lucide-react';

const services = [
  {
    imgSrc: teeth,
    title: 'Root Canal Treatment',
    description: 'Root canal treatment (endodontics) is a dental procedure to treat infection at the centre of a tooth.',
  },
  {
    imgSrc: smile,
    title: 'Cosmetic Dentist',
    description: 'Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile.',
  },
  {
    imgSrc: implant,
    title: 'Dental Implants',
    description: 'A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.',
  },
  {
    imgSrc: teeth,
    title: 'Orthodontics',
    description: 'Orthodontics is a branch of dentistry that treats malocclusion, a condition in which the teeth are not correctly positioned when the mouth is closed.',
  },
  {
    imgSrc: teeth,
    title: 'Orthodontics',
    description: 'Orthodontics is a branch of dentistry that treats malocclusion, a condition in which the teeth are not correctly positioned when the mouth is closed.',
  },
  {
    imgSrc: teeth,
    title: 'Orthodontics',
    description: 'Orthodontics is a branch of dentistry that treats malocclusion, a condition in which the teeth are not correctly positioned when the mouth is closed.',
  },
  {
    imgSrc: teeth,
    title: 'Orthodontics',
    description: 'Orthodontics is a branch of dentistry that treats malocclusion, a condition in which the teeth are not correctly positioned when the mouth is closed.',
  },
];

function ServiceCard({ imgSrc, title, description }) {
  return (
    <div className="bg-white p-3 text-center w-72 space-y-2 hover:bg-[#1376F8] hover:text-white hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 group">
      <div className="bg-[#1376F8]  rounded-full h-16 w-16 mx-auto flex justify-center items-center">
        <img src={imgSrc} alt={title} className="h-10" />
      </div>
      <p className="text-black group-hover:text-white">{title}</p>
      <p className="text-[.8rem] text-[#3C4959] px-3 group-hover:text-white">{description}</p>
      <div className="flex items-center justify-center gap-1 group-hover:text-white">
        <button className="underline group-hover:text-white">Learn More</button>
        <CircleChevronRight className="h-4 group-hover:text-white" />
      </div>
    </div>
  );
}

function Services() {
  return (
    <div>
      <div className='flex flex-col justify-center items-center text-center py-5 px-5'>
        <h1 className='text-4xl font-semibold text-[#011632]'>Services</h1>
        <p className='text-lg text-[#3C4959] lg:w-96'>We use only the best quality materials on the market in order to provide the best products to our patients.</p>
      </div>
      <div className="lg:px-24">
        {Array(1).fill().map((_, index) => (
          <div key={index} className="bg-[#E6F6FE] px-2 py-4 flex gap-4 lg:px-4 flex-wrap justify-center">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
