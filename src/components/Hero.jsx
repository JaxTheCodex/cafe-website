import heroMobile from "../assets/images/homeBg2.jpg";
import heroDesktop from "../assets/images/homeBg1.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        h-screen 
        flex 
        items-start md:items-center
        bg-center bg-cover
        relative
      "
      style={{ backgroundImage: `url(${heroMobile})` }}
    >
      {/* Desktop background */}
      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroDesktop})` }}
      ></div>

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
        <button className="bg-orange-600 px-6 py-3 rounded hover:bg-orange-700">
         <a href="#menu">Order Now </a> <i className="fa-solid fa-arrow-right ml-2"></i>
        </button>
      </div>
    </section>
  );
};

export default Hero;
