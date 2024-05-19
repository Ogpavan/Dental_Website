import React, { useEffect, useRef } from "react";
import { CircleChevronRightIcon } from "lucide-react";
import teeth from "../assets/teeth.png";
import smile from "../assets/smile.png";
import implant from "../assets/implant.png";
import boy from "../assets/boy.png";
import men from "../assets/men.png";
import smile2 from "../assets/smile2.png";
import doc from "../assets/rectangledoc.png";
import playlist from "../assets/playlist.png";

function HeroSection2() {
  const elementsRef = useRef([]);

  useEffect(() => {
    const elements = elementsRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated-swipe-up");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div>
      <style>
        {`
          @keyframes swipeUp {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .animated-swipe-up {
            animation: swipeUp 1s ease-in-out forwards;
            opacity: 0;
          }
        `}
      </style>

      <div
        className="bg-[#E6F6FE] px-2 py-4 flex overflow-auto gap-4 lg:px-4"
        ref={(el) => (elementsRef.current[0] = el)}
      >
        <div className="bg-white p-3 text-center min-w-60 space-y-2">
          <div className="bg-[#1376F8] rounded-full h-16 w-16 mx-auto flex justify-center items-center">
            <img src={teeth} alt="Teeth" className="h-10" />
          </div>
          <p className="text-black">Root Canal Treatment</p>
          <p className="text-[.8rem] text-[#3C4959] px-3">
            Root canal treatment (endodontics) is a dental procedure to treat infection at the centre of a tooth.
          </p>
          <div className="flex items-center justify-center gap-1">
            <button className="underline">Learn More</button>
            <CircleChevronRightIcon className="h-4" />
          </div>
        </div>

        <div className="bg-white p-3 text-center min-w-60 space-y-2">
          <div className="bg-[#1376F8] rounded-full h-16 w-16 mx-auto flex justify-center items-center">
            <img src={smile} alt="Smile" className="h-10" />
          </div>
          <p className="text-black">Cosmetic Dentist</p>
          <p className="text-[.8rem] text-[#3C4959] px-3">
            Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile.
          </p>
          <div className="flex items-center justify-center gap-1">
            <button className="underline">Learn More</button>
            <CircleChevronRightIcon className="h-4" />
          </div>
        </div>

        <div className="bg-white p-3 text-center min-w-60 space-y-2">
          <div className="bg-[#1376F8] rounded-full h-16 w-16 mx-auto flex justify-center items-center">
            <img src={implant} alt="Implant" className="h-10" />
          </div>
          <p className="text-black">Dental Implants</p>
          <p className="text-[.8rem] text-[#3C4959] px-3">
            A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.
          </p>
          <div className="flex items-center justify-center gap-1">
            <button className="underline">Learn More</button>
            <CircleChevronRightIcon className="h-4" />
          </div>
        </div>
      </div>

      <section ref={(el) => (elementsRef.current[1] = el)}>
        <div className="lg:flex lg:justify-between">
          <div>
            <div className="px-6">
              <p className="text-[#011632] text-4xl font-semibold pt-20 lg:flex-wrap lg:w-[35rem]">
                We’re welcoming new patients and can’t wait to meet you.
              </p>
              <p className="text-[#3C4959] pt-8 lg:flex-wrap lg:w-[30rem]">
                We use only the best quality materials on the market in order to provide the best products to our patients, so don’t worry about anything and book yourself.
              </p>
            </div>
            <div className="flex items-center pt-4 underline px-6 lg:pt-20">
              <p>Learn More</p>
              <p><CircleChevronRightIcon /></p>
            </div>
          </div>
          <div>
            <img src={boy} className="py-16 px-6" alt="Boy" />
          </div>
        </div>
      </section>

      <section ref={(el) => (elementsRef.current[2] = el)}>
        <div className="bg-[#E6F6FE] px-2 py-4 lg:py-0">
          <div className="px-6 lg:flex lg:flex-row-reverse lg:justify-between">
            <div className="lg:w-[37rem] lg:px-5 lg:space-y-4">
              <div>
                <p className="text-[#011632] text-4xl font-semibold pt-20 lg:pt-14">
                  Why choose Smile for all your dental treatments?
                </p>
                <p className="text-[#3C4959] pt-8">
                  We use only the best quality materials on the market in order to provide the best products to our patients, so don’t worry about anything and book yourself.
                </p>
              </div>
              <ol className="list-disc pl-4 text-[#2a3037] font-semibold py-3">
                <li>Top quality dental team</li>
                <li>State of the art dental services</li>
                <li>Discount on all dental treatment</li>
                <li>Enrollment is quick and easy</li>
              </ol>
              <button className="bg-[#1376F8] text-white px-4 py-2 mt-2 rounded-md text-lg">
                Book an Appointment
              </button>
            </div>
            <div>
              <img src={men} className="py-10" alt="Men" />
            </div>
          </div>
        </div>
      </section>

      <section ref={(el) => (elementsRef.current[3] = el)}>
        <div className="px-6 lg:flex lg:justify-between">
          <div>
            <div className="lg:max-w-xl lg:space-y-4">
              <p className="text-[#011632] text-4xl font-semibold pt-20">
                Leave your worries at the door and enjoy a healthier, more precise smile
              </p>
              <p className="text-[#3C4959] pt-8">
                We use only the best quality materials on the market in order to provide the best products to our patients, so don’t worry about anything and book yourself.
              </p>
            </div>
            <button className="bg-[#1376F8] text-white px-4 py-2 rounded-md text-lg mt-8">
              Book an Appointment
            </button>
          </div>
          <div>
            <img src={smile2} className="py-16" alt="Smile" />
          </div>
        </div>
      </section>

      <section className="lg:flex lg:flex-col lg:justify-center lg:items-center lg:w-full" ref={(el) => (elementsRef.current[4] = el)}>
        <div className="px-6 lg:text-center lg:w-[55%]">
          <div>
            <p className="text-[#011632] text-4xl font-semibold pt-20">
              We’re welcoming new patients and can’t wait to meet you.
            </p>
            <p className="text-[#3C4959] pt-8">
              We use only the best quality materials on the market in order to provide the best products to our patients, so don’t worry about anything and book yourself.
            </p>
          </div>
          <div className="hidden lg:block">
            <img src={playlist} className="py-16" alt="Playlist" />
          </div>
          <div className="lg:hidden">
            <img src={doc} className="py-16" alt="Doctor" />
          </div>
          <div className="flex justify-center pb-10">
            <button className="bg-[#1376F8] text-white px-4 py-2 rounded-md text-lg">
              Watch Playlist
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection2;
