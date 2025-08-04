import React from "react";
import imagsli from "../assets/Slider.png";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    image: imagsli,
    rating: 4.9,
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laLorem ipsum dolor. ",
    name: "Karin C.",
    role: "User",
  },
  {
    image: imagsli,
    rating: 5,
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laLorem ipsum dolor. ",
    name: "Karin C.",
    role: "User",
  },
  {
    image: imagsli,
    rating: 4.8,
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laLorem ipsum dolor. ",
    name: "Karin C.",
    role: "User",
  },
];

const Carousel = () => {
  return (
    <div className="w-full flex justify-center py-12">
      <div className="carousel w-full">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="carousel-item w-full flex justify-center px-4"
          >
            <div className="bg-[#D52533AB] backdrop-blur-sm rounded-3xl p-8 max-w-lg w-full flex flex-col items-center text-center text-white shadow-xl">
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="text-sm text-white/80">
                  Rated {t.rating}/5
                </span>
              </div>
              <p className="text-white/90 font-semibold font-display text-base mb-4">
                “ {t.text} ”
              </p>
              <div className="text-lg font-bold font-display">{t.name}</div>
              <div className="text-sm text-white/70 italic font-display">
                {t.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
