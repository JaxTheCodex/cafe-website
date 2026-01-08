const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-950 via-gray-900 to-gray-800 text-gray-200">
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-3">
            Foodies Restaurant
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Serving delicious food with love and quality.  
            Fresh ingredients, great taste, and warm hospitality –  
            your perfect place to eat & relax.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <i className="fa-solid fa-location-dot text-orange-500 mr-2"></i>
              Bokaro Steel City, Jharkhand
            </li>
            <li>
              <i className="fa-solid fa-phone text-orange-500 mr-2"></i>
              +91 9XXXXXXXXX
            </li>
            <li>
              <i className="fa-solid fa-envelope text-orange-500 mr-2"></i>
              foodies@email.com
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Follow Us
          </h3>
          <div className="flex gap-4 text-xl">
            <i className="fa-brands fa-facebook cursor-pointer hover:text-blue-500 transition"></i>
            <i className="fa-brands fa-instagram cursor-pointer hover:text-pink-500 transition"></i>
            <i className="fa-brands fa-whatsapp cursor-pointer hover:text-green-500 transition"></i>
          </div>

          <p className="text-sm text-gray-400 mt-4">
            Stay connected for offers & updates 🍽️
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom Bar */}
      <div className="py-4 text-center text-sm text-gray-400">
        <p>
          © 2026 <span className="text-white">Foodies Restaurant</span>.  
          All Rights Reserved.
        </p>
        <p className="mt-1">
          Developed by <span className="text-orange-500 font-semibold">JPdev</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
