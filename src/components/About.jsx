import aboutBg from "../assets/images/aboutBg.jpg";

const About = () => {
  return (
    <section
  id="about"
  className="relative w-full min-h-screen flex items-center"
  style={{
    backgroundImage: `url(${aboutBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed" // ✅ makes background fixed
  }}
>

      {/* 🔥 Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h4 className="text-orange-400 font-semibold tracking-widest mb-2">
              OUR STORY
            </h4>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Welcome to <span className="text-orange-500">Tea Point Cafe</span>
            </h2>

            <p className="text-lg opacity-90 mb-4 leading-relaxed">
              Tea Point Cafe is a warm and welcoming place where every cup tells
              a story. For over <strong>10 years</strong>, we have been serving
              freshly brewed tea, handcrafted coffee, and delicious snacks made
              with love.
            </p>

            <p className="text-lg opacity-90 mb-6 leading-relaxed">
              Our mission is simple — to create a space where people can relax,
              connect, and enjoy authentic flavors made from fresh ingredients
              and traditional recipes.
            </p>

            <button className="mt-4 bg-orange-600 hover:bg-orange-700 transition px-8 py-3 rounded-full font-semibold shadow-lg">
              Visit Our Menu
            </button>
          </div>

          {/* Right Info Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
              <h3 className="text-3xl font-bold text-orange-400 mb-2">10+</h3>
              <p className="opacity-90">Years of Experience</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
              <h3 className="text-3xl font-bold text-orange-400 mb-2">50+</h3>
              <p className="opacity-90">Menu Items</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
              <h3 className="text-3xl font-bold text-orange-400 mb-2">100%</h3>
              <p className="opacity-90">Fresh Ingredients</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
              <h3 className="text-3xl font-bold text-orange-400 mb-2">1K+</h3>
              <p className="opacity-90">Happy Customers</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
