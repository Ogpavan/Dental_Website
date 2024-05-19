import React, { useState, useEffect, useRef } from "react";
import dentist1 from "../assets/dentist1.png";
import dentist2 from "../assets/dentist2.png";
import { CircleMinus, CirclePlus } from "lucide-react";

function HeroSection3() {
  const [expandedIds, setExpandedIds] = useState({});
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

  const toggleExpand = (id) => {
    setExpandedIds((prevExpandedIds) => ({
      ...prevExpandedIds,
      [id]: !prevExpandedIds[id],
    }));
  };

  const faqData = [
    { id: 1, question: "Do you offer non-profit discounts?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eum in ut, nostrum rem consequatur nam, officia, iusto deserunt reiciendis atque delectus porro quos fugit velit dolor placeat asperiores a." },
    { id: 2, question: "Can I see who reads my email?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eum in ut, nostrum rem consequatur nam, officia, iusto deserunt reiciendis atque delectus porro quos fugit velit dolor placeat asperiores a." },
    { id: 3, question: "Do you offer discounts for bulk orders?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eum in ut, nostrum rem consequatur nam, officia, iusto deserunt reiciendis atque delectus porro quos fugit velit dolor placeat asperiores a." },
  ];

  const data = [
    {
      id: 1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ypsvwWq7gLKIeLucok12LJgqaz7XVSXa_Q&usqp=CAU",
      name: "Thomas Daniel",
      content: "Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fa2nL4oE8_eZZh-9j0Q7y5Qzfx6MVj8fjQ&usqp=CAU",
      name: "Thomas Daniel",
      content: "Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZl5Z8RItznsV4l25nLiumpoHccj2t9I4ijQ&usqp=CAU",
      name: "Thomas Daniel",
      content: "Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.",
    },
  ];

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

      <section ref={(el) => (elementsRef.current[0] = el)}>
        <div className="bg-[#E6F6FE] px-2 py-4">
          <div className="px-6 lg:flex lg:flex-col lg:justify-center lg:items-center lg:space-y-8">
            <div className="lg:text-center lg:w-[60%]">
              <p className="text-[#011632] text-4xl font-semibold pt-20">Meet Our Specialists</p>
              <p className="text-[#3C4959] pt-8">
                We use only the best quality materials on the market in order to provide the best products to our patients, so don’t worry about anything and book yourself.
              </p>
            </div>
            <div className="lg:flex lg:gap-4">
              <img src={dentist1} className="py-10 lg:py-0" alt="Dentist 1" />
              <img src={dentist2} alt="Dentist 2" />
            </div>
            <div className="flex justify-center p-5">
              <button className="bg-[#1376F8] text-white px-4 py-2 mt-2 rounded-md text-lg">View all members</button>
            </div>
          </div>
        </div>
      </section>

      <section ref={(el) => (elementsRef.current[1] = el)}>
        <div className="space-y-10 px-6 lg:flex lg:flex-col lg:items-center">
          <div className="lg:text-center lg:w-[60%]">
            <p className="text-[#011632] text-4xl font-semibold pt-20">Our Happy Clients</p>
            <p className="text-[#3C4959] pt-8">
              We use only the best quality materials on the market in order to provide the best products to our patients, so don’t worry about anything and book yourself.
            </p>
          </div>
          <div className="flex gap-4 overflow-auto px-6 py-3">
            {data.map((item) => (
              <div key={item.id} className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-3 py-2">
                <div className="flex">
                  <img src={item.img} className="h-20 w-20 object-cover rounded-full" alt={item.name} />
                  <p className="text-xl font-bold ml-4 mt-4">{item.name}</p>
                </div>
                <p className="w-72 mt-2 text-sm text-[#3C4959]">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lg:w-full lg:flex lg:flex-col lg:items-center lg:justify-center" ref={(el) => (elementsRef.current[2] = el)}>
        <div className="lg:w-[60%]">
          <div className="space-y-10 px-6">
            <div>
              <p className="text-[#011632] text-4xl font-semibold pt-20 lg:text-center">Frequently Asked Questions</p>
              <p className="text-[#3C4959] pt-8 lg:text-center">
                We use only the best quality materials on the market in order to provide the best products to our patients, so don’t worry about anything and book yourself.
              </p>
            </div>

            <div className="h-54">
              {faqData.map((faq) => (
                <div key={faq.id} className="font-semibold text-[#011632] px-2 pb-10">
                  <li className="border-b-2 py-3 flex justify-between">
                    {faq.question}
                    <button onClick={() => toggleExpand(faq.id)}>
                      {expandedIds[faq.id] ? <CircleMinus /> : <CirclePlus />}
                    </button>
                  </li>
                  <div id={`faq-${faq.id}`} className={`w-full transition-all duration-500 ${expandedIds[faq.id] ? "h-auto" : "h-0 overflow-hidden"}`}>
                    <p className={`w-full transition-all ease-in duration-300 text-[#3C4959] text-sm font-normal ${expandedIds[faq.id] ? "opacity-100" : "opacity-0"}`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection3;
