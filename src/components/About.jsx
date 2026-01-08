import aboutBg from "../assets/images/aboutBg.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      {/* ✅ LAZY BACKGROUND IMAGE */}
      <img
        src={aboutBg}
        alt=""
        loading="lazy"
        className="
          absolute inset-0 w-full h-full
          object-cover
          -z-10
          hidden md:block
        "
      />

      {/* Mobile fallback (NO FIXED BG) */}
      <img
        src={aboutBg}
        alt=""
        loading="lazy"
        className="
          absolute inset-0 w-full h-full
          object-cover
          -z-10
          md:hidden
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65 -z-10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <h4 className="text-orange-400 font-semibold tracking-widest mb-2">
              OUR STORY
            </h4>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Welcome to <span className="text-orange-500">Tea Point Cafe</span>
            </h2>

            <p className="text-lg opacity-90 mb-4 leading-relaxed">
              Tea Point Cafe is a warm and welcoming place where every cup tells
              a story. For over <strong>10 years</strong>, we’ve served freshly
              brewed tea and delicious snacks made with love.
            </p>

            <p className="text-lg opacity-90 mb-6 leading-relaxed">
              Our mission is simple — create a space where people relax, connect,
              and enjoy authentic flavors made from fresh ingredients.
            </p>

            <a
              href="#menu"
              className="inline-block mt-4 bg-orange-600 hover:bg-orange-700 transition px-8 py-3 rounded-full font-semibold shadow-lg"
            >
              Visit Our Menu
            </a>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              ["10+", "Years of Experience"],
              ["50+", "Menu Items"],
              ["100%", "Fresh Ingredients"],
              ["1K+", "Happy Customers"]
            ].map(([num, text]) => (
              <div
                key={text}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center"
              >
                <h3 className="text-3xl font-bold text-orange-400 mb-2">
                  {num}
                </h3>
                <p className="opacity-90">{text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
