import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import oopimg from "../assets/oopimg.png"
import cppimg from "../assets/cppimg.png"
import jsimg from "../assets/jsimg.png"
import reactimg from "../assets/reactimg.png"
import nodejsimg from "../assets/nodejsimg.png"
import expressimg from "../assets/expressimg.png"
import databaseimg from "../assets/databaseimg.png"
import ormimg from "../assets/prismaimg.png"
import githubimg from "../assets/github.png"
import tailwindimg from "../assets/tailwindimg.png"
import dsaimg from "../assets/dsaimg.png"


const SlidingCards = () => {

  const cards = [
    { id: 1, title: "OOP", description: "Indepth knowledge of object oriented programming", img: oopimg },
    { id: 2, title: "C++", description: "Proficient in programming with c++", img: cppimg },
    { id: 3, title: "JS", description: "Proficient in programming with JavaScript", img: jsimg },
    { id: 4, title: "React", description: "Currently working with React, DOM manipulation, React routes, libraries etc.", img: reactimg },
    { id: 5, title: "Node.js", description: "Worked on Node.js and its libraries", img: nodejsimg },
    { id: 6, title: "Express", description: "Good understanding of Express.js", img: expressimg },
    { id: 7, title: "Databases", description: "SQL and NoSQL databases - MongoDB and MySQL", img: databaseimg },
    { id: 8, title: "ORMs", description: "Object Relational Mapping - Prisma", img: ormimg },
    { id: 9, title: "Git/GitHub", description: "Version Control Systems like Git and Github", img: githubimg },
    { id: 10, title: "CSS/TailwindCSS", description: "Styling with CSS, TailwindCSS", img: tailwindimg },
    { id: 10, title: "DSA", description: "Data Structures and Algorithms - Arrays, Loops, Sorting, Searching, etc.", img: dsaimg },
  ];

  return (
    <div className="h-screen sm:h-[80vh] md:h-[90vh] lg:h-[90vh] p-8 pt-32">
    {/* <div className="p-8 flex flex-col items-start font-display"> */}
      <div className="p-8">
        <h1 className="text-md font-display font-bold text-left mt-8">My Skills</h1>
        <h1 className="text-4xl font-display font-bold text-left mt-8">My Expertise</h1> 


        {/* <div className="w-screen mx-auto mt-8 rounded-lg"> */}
        <div className="h-screen sm:h-[80vh] md:h-[90vh] lg:h-[90vh] p-8 pt-32">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id} className="flex justify-center ">
                <div className="flex flex-col justify-center items-center h-[370px] w-[405px] bg-[rgba(255,255,255,0.9)] shadow-md rounded-xl p-6">
                  <img src={card.img} alt={card.title} className="w-[80px] h-[80px] object-cover rounded-xl" />
                  <h2 className="text-2xl font-semibold text-gray-800 mt-4 text-center">{card.title}</h2>
                  <p className="text-lg font-medium text-gray-600 mt-1 text-center">{card.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SlidingCards;
