import { PhoneCallIcon } from "lucide-react";
import React from "react";
import Doc1 from "../assets/Doc1.png";
import Doc2 from "../assets/DocbG.png";
import HeroSection3 from "./HeroSection3";
import HeroSection2 from "./HeroSection2";
import lgDoc from "../assets/lgDoc.png";

function Homepage() {
  return (
    <div className="lg:px-24">
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .animated-slide-in {
            animation: slideIn 1s ease-out;
          }

          .animated-fade-in {
            animation: fadeIn 1.5s ease-in-out;
          }
        `}
      </style>
      <div className="lg:flex lg:pt-8">
        <div className="animated-slide-in">
          <div className="py-8 grid gap-y-8 px-6 lg:w-[40rem]">
            <h1 className="text-4xl lg:text-5xl font-semibold text-[#011632]">
              Get Ready For Your Best Ever Dental Experience
            </h1>
            <p className="text-[#3C4959]">
              We use only the best quality materials on the market in order to
              provide the best products to our patients, so don’t worry about
              anything and book yourself.
            </p>
            <div className="flex items-center justify-between lg:justify-start flex-wrap">
              <button className="bg-[#1376F8] text-white px-4 py-2 rounded-md">
                Get Started
              </button>
              <div className="flex items-center gap-2 lg:ml-3">
                <button className="text-[#1376F8] border-[2px] rounded-md text-[10px] px-2 py-2">
                  <PhoneCallIcon />
                </button>
                <div>
                  <p className="text-[#1376F8] text-[.8rem]">24H Emergency</p>
                  <p className="text-[#3C4959] text-[.8rem]">+91 7302667115</p>
                </div>
              </div>
            </div>
            <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-4 py-2 text-[#3C4959]">
              <div className="flex items-center gap-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu3VVDOvmLU3rE8hRipaGlKH0mjAvmk6CU0w&s"
                  alt=""
                  className="h-10 w-10 rounded-full border object-cover"
                />
                <div>
                  <p className="text-gray-800">Thomas Daniel</p>
                  <p className="text-[.8rem]">Sr Dental</p>
                </div>
              </div>
              <p className="text-[.8rem] italic py-2">
                Top quality dental treatment done by field experts. Highly
                recommended for everyone.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="animated-fade-in">
            <div className="hidden lg:block">
              <img src={lgDoc} alt="Doctor" className="w-[32rem]" />
            </div>
            <img
              src={Doc2}
              alt="Doctor"
              className="absolute z-[-1] lg:top-28 lg:right-28"
            />
            <img src={Doc1} alt="Doctor" className="lg:hidden" />
          </div>
        </div>
      </div>
      <HeroSection2 />
      <HeroSection3 />
    </div>
  );
}

export default Homepage;
