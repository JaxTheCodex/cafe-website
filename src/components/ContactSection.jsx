const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-gradient-to-br from-red-50 via-white to-red-100"
    >
      {/* Decorative blur */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-red-300/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-300/30 blur-3xl rounded-full"></div>

      {/* Heading */}
      <h2 className="relative text-4xl font-extrabold text-center mb-14 text-gray-800">
        Contact & Location
        <span className="block w-20 h-1 bg-red-500 mx-auto mt-4 rounded-full"></span>
      </h2>

      {/* Main Grid */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* 📞 Contact Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6 hover:shadow-2xl transition">
          
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h3>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100">
              <i className="fa-solid fa-location-dot text-red-600 text-xl"></i>
            </div>
            <p className="text-lg text-gray-700">
              Bokaro Steel City, Jharkhand
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100">
              <i className="fa-solid fa-phone text-red-600 text-xl"></i>
            </div>
            <p className="text-lg text-gray-700">
              +91 98765 43210
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-100">
              <i className="fa-solid fa-envelope text-red-600 text-xl"></i>
            </div>
            <p className="text-lg text-gray-700">
              foodies@gmail.com
            </p>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-3 w-full bg-green-600 text-white px-6 py-4 rounded-full text-lg font-semibold hover:bg-green-700 hover:scale-[1.02] transition"
          >
            <i className="fa-brands fa-whatsapp text-2xl"></i>
            Chat on WhatsApp
          </a>
        </div>

        {/* 🗺️ Map Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
          <div className="p-4 font-semibold text-gray-700 bg-red-50">
            Find Us on Map
          </div>

          <iframe
            title="Tea Point Cafe"
            className="w-full h-[300px] border-0"
            src="https://www.google.com/maps?q=Bokaro%20Steel%20City&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
