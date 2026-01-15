import { useState } from "react";
import heroBg from "../assets/images/homeBg1.jpg";

import dishesImg from "../assets/images/foodplate.png";
import dessertImg from "../assets/images/dessert.png";
import drinksImg from "../assets/images/drinks.png";
import platterImg from "../assets/images/platter.png";
import snacksImg from "../assets/images/snacks.png";

const foodImages = [
  { key: "dishes", label: "Dishes", img: dishesImg },
  { key: "dessert", label: "Dessert", img: dessertImg },
  { key: "drinks", label: "Drinks", img: drinksImg },
  { key: "platter", label: "Platter", img: platterImg },
  { key: "snacks", label: "Snacks", img: snacksImg },
];

const Hero = () => {
  const [activeFood, setActiveFood] = useState(foodImages[0]);

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >
      {/* BACKGROUND */}
      <img
        src={heroBg}
        alt="Tea Point Cafe Background"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full w-full px-6 md:px-20 flex flex-col md:flex-row mt-16">

        {/* ================= TEXT (TOP HALF ON MOBILE) ================= */}
        <div
          className="
    h-[30%] md:h-[300px]
    flex flex-col justify-center
    text-white hero-text
    md:max-w-xl
   lg:mt-48 md:mt-16
  "
        >

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Delicious Food
          </h1>

          <p
  style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 600 }}
  className="
    mb-6
    text-2xl
    sm:text-3xl
    md:text-4xl
    opacity-90
    tracking-wide
    leading-snug
  "
>
  Experience the best taste made with love & fresh ingredients.
</p>


          <a
            href="#menu"
            className="inline-flex w-fit items-center gap-2 bg-orange-600 px-5 py-2.5 rounded hover:bg-orange-700 transition hero-btn text-sm sm:text-base"
          >
            Order Now
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* ================= FOOD (BOTTOM HALF ON MOBILE) ================= */}
        <div
          className="
            h-[45%] md:h-auto
            flex flex-col md:flex-row
            items-center justify-center
            gap-4  md:gap-8 mb-8 w-full
          "
        >
          {/* FOOD IMAGE */}
        <div key={activeFood.key} className="hero-food relative">
            <img
              src={activeFood.img}
              alt={activeFood.label}
              className="
                w-[260px]
                sm:w-[300px]
                md:w-[480px]
                lg:w-[560px]
                drop-shadow-[0_45px_80px_rgba(0,0,0,0.65)]
                transition-transform duration-500
              "
            />

            {/* GLOW */}
            <div
              className="
                absolute inset-0 -z-10
                blur-3xl opacity-40
                bg-black
                rounded-full
                scale-90
              "
            />
          </div>

          {/* BUTTONS */}
          <div
            className="
              flex flex-row md:flex-col
              gap-2 sm:gap-3
              flex-wrap md:flex-nowrap
              justify-center
            "
          >
            {foodImages.map(item => (
              <button
                key={item.key}
                onClick={() => setActiveFood(item)}
                className={`
                  flex items-center gap-2
                  px-3 py-1.5
                  rounded-full
                  text-xs sm:text-sm font-semibold
                  transition-all duration-300
                  border backdrop-blur-md
                  ${activeFood.key === item.key
                    ? "bg-orange-600 text-white shadow-md scale-105"
                    : "bg-white/90 text-gray-800 hover:bg-orange-100"
                  }
                `}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-7 h-7 rounded-full object-cover border"
                />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        .hero-text {
          animation: textSlide 1s ease-out forwards;
          opacity: 0;
        }

        .hero-btn {
          animation: btnFade 1.3s ease-out forwards;
          opacity: 0;
        }

        .hero-food {
          animation: foodSwap 0.6s ease-out forwards;
        }

        @keyframes textSlide {
          from {
            transform: translateX(-40px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes btnFade {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes foodSwap {
          from {
            transform: translateX(40px) scale(0.95);
            opacity: 0;
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
