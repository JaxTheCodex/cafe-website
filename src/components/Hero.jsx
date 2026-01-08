import heroMobile from "../assets/images/homeBg2.jpg";
import heroDesktop from "../assets/images/homeBg1.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-start md:items-center overflow-hidden"
    >
      {/* ✅ RESPONSIVE IMAGE (only one loads) */}
      <picture className="absolute inset-0">
        <source media="(min-width: 768px)" srcSet={heroDesktop} />
        <img
          src={heroMobile}
          alt="Tea Point Cafe"
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
      </picture>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div
        className="
          relative z-10 text-white
          px-6 md:px-20
          pt-28 md:pt-0
          max-w-xl
        "
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Delicious Food
        </h1>

        <p className="mb-6 text-lg">
          Experience the best taste made with love & fresh ingredients.
        </p>

        <a
          href="#menu"
          className="
            inline-flex items-center gap-2
            bg-orange-600 px-6 py-3 rounded
            hover:bg-orange-700 transition
          "
        >
          Order Now
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
