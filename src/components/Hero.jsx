import heroDesktop from "../assets/images/homeBg1.jpg";
import foodImg from "../assets/images/foodplate.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-start md:items-center overflow-hidden"
    >
      {/* Background */}
      <picture className="absolute inset-0">
        <source media="(min-width: 768px)" srcSet={heroDesktop} />
        <img
          src={heroDesktop}
          alt="Tea Point Cafe"
          loading="eager"
          className="w-full h-full object-cover"
        />
      </picture>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div
        className="
          relative z-10 w-full
          px-6 md:px-20
          flex flex-col md:flex-row
          items-center justify-between
        "
      >
        {/* TEXT */}
        <div
          className="
            max-w-xl text-white hero-text
            pt-24 sm:pt-28 md:pt-0
          "
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Delicious Food
          </h1>

          <p className="mb-6 text-base sm:text-lg opacity-90">
            Experience the best taste made with love & fresh ingredients.
          </p>

          <a
            href="#menu"
            className="
              inline-flex items-center gap-2
              bg-orange-600 px-6 py-3 rounded
              hover:bg-orange-700 transition hero-btn
            "
          >
            Order Now
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* FOOD IMAGE */}
        <div className="hero-food mt-16 sm:mt-20 md:mt-0">
          <img
            src={foodImg}
            alt="Food Plate"
            className="
              w-[320px]
              sm:w-[380px]
              md:w-[520px]
              lg:w-[600px]
              drop-shadow-2xl
            "
          />
        </div>
      </div>

      {/* ANIMATIONS */}
      <style>{`
        /* TEXT */
        .hero-text {
          animation: textSlide 1s ease-out forwards;
          opacity: 0;
        }

        .hero-btn {
          animation: btnFade 1.3s ease-out forwards;
          opacity: 0;
        }

        /* MOBILE FOOD */
        .hero-food {
          animation: foodMobile 1.3s ease-out forwards;
          opacity: 0;
        }

        /* DESKTOP FOOD */
        @media (min-width: 768px) {
          .hero-food {
            animation: foodDesktop 1.4s ease-out forwards;
          }
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

        @keyframes foodMobile {
          from {
            transform: translateY(90px) rotate(6deg) scale(0.95);
            opacity: 0;
          }
          to {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 1;
          }
        }

        @keyframes foodDesktop {
          from {
            transform: translateX(160px) rotate(20deg) scale(0.9);
            opacity: 0;
          }
          to {
            transform: translateX(0) rotate(0deg) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
