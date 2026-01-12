import { useState } from "react";
import { useCart } from "../context/CartContext";
import menuBg from "../assets/images/menuBg.jpg";
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";


import item1 from "../assets/images/item (11).jpg";
import item2 from "../assets/images/item (8).jpg";
import item3 from "../assets/images/item (18).jpg";
import item4 from "../assets/images/item (13).jpg";
import item5 from "../assets/images/item (20).jpg";
import item6 from "../assets/images/item.jpg";
import item7 from "../assets/images/item (25).jpg";
import item8 from "../assets/images/item (7).jpg";
import item9 from "../assets/images/item (1).png";
import item10 from "../assets/images/item (9).jpg";
import item11 from "../assets/images/item (19).jpg";
import item12 from "../assets/images/item (24).jpg";
import item13 from "../assets/images/item (22).jpg";
import item14 from "../assets/images/item (12).jpg";
import item15 from "../assets/images/item (1).jpg";
import item16 from "../assets/images/item (14).jpg";
import item17 from "../assets/images/item (10).jpg";
import item18 from "../assets/images/item (16).jpg";
import item19 from "../assets/images/item (17).jpg";
import item20 from "../assets/images/item (5).jpg";
import item21 from "../assets/images/item (4).jpg";
import item22 from "../assets/images/item (3).jpg";
import item24 from "../assets/images/item (6).jpg";
import item25 from "../assets/images/item (21).jpg";
import item26 from "../assets/images/item (15).jpg";



const foods = [
  {
    id: 1,
    name: "Tea",
    price: "₹20",
    img: item1,
    desc: "Classic Indian tea served hot",
    tag: "Hot",
    type: "tea"
  },
  {
    id: 2,
    name: "Masala Tea",
    price: "₹30",
    img: item2,
    desc: "Tea brewed with aromatic Indian spices",
    tag: "Best Seller",
    type: "tea"
  },
  {
    id: 3,
    name: "Coffee",
    price: "₹40",
    img: item3,
    desc: "Strong and refreshing hot coffee",
    tag: "Popular",
    type: "tea"
  },
  {
    id: 4,
    name: "Black Coffee",
    price: "₹35",
    img: item4,
    desc: "Pure black coffee with bold taste",
    tag: "Strong",
    type: "tea"
  },
  {
    id: 5,
    name: "Masala Cold Drink",
    price: "₹50",
    img: item5,
    desc: "Refreshing cold drink with masala twist",
    tag: "Chilled",
    type: "tea"
  },
  {
    id: 6,
    name: "Cheese Corn Ball",
    price: "₹90",
    img: item6,
    desc: "Crispy corn balls filled with cheese",
    tag: "Cheesy",
    type: "veg"
  },
  {
    id: 7,
    name: "Peyaji",
    price: "₹60",
    img: item7,
    desc: "Crispy onion fritters",
    tag: "Snack",
    type: "veg"
  },
  {
    id: 8,
    name: "Cajun Spice Potato",
    price: "₹80",
    img: item8,
    desc: "Potato tossed with cajun spices",
    tag: "Spicy",
    type: "veg"
  },
  {
    id: 9,
    name: "Hot Soup",
    price: "₹70",
    img: item9,
    desc: "Comforting hot soup",
    tag: "Warm",
    type: "veg"
  },
  {
    id: 10,
    name: "Manchow Soup",
    price: "₹90",
    img: item10,
    desc: "Spicy Indo-Chinese soup",
    tag: "Spicy",
    type: "veg"
  },
  {
    id: 11,
    name: "Crispy Babycorn Salt & Pepper",
    price: "₹120",
    img: item11,
    desc: "Crispy babycorn with salt & pepper",
    tag: "Crispy",
    type: "veg"
  },
  {
    id: 12,
    name: "Crispy Mushroom Salt & Pepper",
    price: "₹130",
    img: item12,
    desc: "Golden fried mushroom with spices",
    tag: "Crispy",
    type: "veg"
  },
  {
    id: 13,
    name: "Crispy Babycorn Chilli",
    price: "₹140",
    img: item13,
    desc: "Babycorn tossed in chilli sauce",
    tag: "Chilli",
    type: "veg"
  },
  {
    id: 14,
    name: "Crispy Corn Salt & Pepper",
    price: "₹110",
    img: item14,
    desc: "Crunchy corn with salt & pepper",
    tag: "Crunchy",
    type: "veg"
  },
  {
    id: 15,
    name: "Crispy Chicken Salt & Pepper",
    price: "₹170",
    img: item15,
    desc: "Crispy chicken tossed in spices",
    tag: "Non-Veg",
    type: "nonveg"
  },
  {
    id: 16,
    name: "Corn Salt & Pepper",
    price: "₹100",
    img: item16,
    desc: "Corn sautéed with mild spices",
    tag: "Veg",
    type: "veg"
  },
  {
    id: 17,
    name: "Paneer Chilli Dry",
    price: "₹160",
    img: item17,
    desc: "Paneer tossed in chilli sauce",
    tag: "Paneer",
    type: "veg"
  },
  {
    id: 18,
    name: "Paneer Chilli Gravy",
    price: "₹170",
    img: item18,
    desc: "Paneer cooked in spicy gravy",
    tag: "Gravy",
    type: "veg"
  },
  {
    id: 19,
    name: "Mushroom Chilli Dry",
    price: "₹150",
    img: item19,
    desc: "Mushroom stir-fried with spices",
    tag: "Veg",
    type: "veg"
  },
  {
    id: 20,
    name: "Mushroom Chilli Gravy",
    price: "₹160",
    img: item20,
    desc: "Mushroom in rich chilli gravy",
    tag: "Gravy",
    type: "veg"
  },
  {
    id: 21,
    name: "Soya Chilli Dry",
    price: "₹140",
    img: item21,
    desc: "Soya chunks tossed in chilli sauce",
    tag: "Protein",
    type: "veg"
  },
  {
    id: 22,
    name: "Soya Chilli Gravy",
    price: "₹150",
    img: item22,
    desc: "Soya chunks cooked in gravy",
    tag: "Protein",
    type: "veg"
  },
  {
    id: 24,
    name: "Chicken Chilli Dry",
    price: "₹190",
    img: item24,
    desc: "Chicken tossed in chilli sauce",
    tag: "Spicy",
    type: "nonveg"
  },
  {
    id: 25,
    name: "Chicken Chilli Gravy",
    price: "₹200",
    img: item25,
    desc: "Chicken in thick chilli gravy",
    tag: "Gravy",
    type: "nonveg"
  },
  {
    id: 26,
    name: "Chicken 65",
    price: "₹210",
    img: item26,
    desc: "South Indian style spicy fried chicken",
    tag: "Chef Special",
    type: "nonveg"
  }
];

const Menu = () => {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState("all");
  const [showMenuCard, setShowMenuCard] = useState(false);


  const filteredFoods =
    filter === "all"
      ? foods
      : foods.filter(food => food.type === filter);

  return (
    <section id="menu" className="relative py-24 overflow-hidden">

      {/* ✅ BACKGROUND IMAGE (LAZY) */}
      <img
        src={menuBg}
        alt=""
        loading="lazy"
        className="
          absolute inset-0 w-full h-full
          object-cover
          -z-10
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Header */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-white text-4xl font-extrabold mb-3">
          Our Menu
        </h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          Handcrafted beverages and delicious snacks
        </p>
      </div>

      {/* FILTER BUTTONS */}
      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-4 mb-14 flex-wrap px-4">
        {["all", "tea", "veg", "nonveg"].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`
        px-7 py-2.5 rounded-full
        font-semibold text-sm tracking-wide
        backdrop-blur-md
        transition-all duration-300
        border border-transparent
        shadow-sm
        ${filter === type
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105"
                : "bg-white/80 text-gray-800 hover:bg-orange-100 hover:shadow-md hover:-translate-y-0.5"
              }
      `}
          >
            {type === "all" && "✨ All"}
            {type === "tea" && "☕ Tea"}
            {type === "veg" && "🟢 Veg"}
            {type === "nonveg" && "🔴 Non-Veg"}
          </button>
        ))}

        {/* 🔥 MENU CARD BUTTON */}
        <button
          onClick={() => setShowMenuCard(true)}
          className="
      px-7 py-2.5 rounded-full
      font-semibold text-sm tracking-wide
      bg-gray-300 text-black
      hover:bg-white
      transition-all duration-300
      shadow-md hover:shadow-lg
      hover:-translate-y-0.5
    "
        >
          📖 Menu Card
        </button>
      </div>

      {showMenuCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

          {/* Popup */}
          <div className="relative bg-white rounded-2xl max-w-4xl w-[90%] p-6 animate-popup">

            {/* Close Button */}
            <button
              onClick={() => setShowMenuCard(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold text-center mb-6">
              Our Menu Card
            </h3>

            {/* Images */}
            <div className="grid md:grid-cols-2 gap-6">
              <img
                src={card1}
                alt="Menu Card 1"
                className="rounded-xl shadow-md"
              />
              <img
                src={card2}
                alt="Menu Card 2"
                className="rounded-xl shadow-md"
              />
            </div>
          </div>

          {/* Animation */}
          <style>{`
      @keyframes popup {
        from {
          transform: scale(0.9);
          opacity: 0;
        }
        to {
          transform: scale(1);
          opacity: 1;
        }
      }

      .animate-popup {
        animation: popup 0.3s ease-out;
      }
    `}</style>
        </div>
      )}




      {/* HORIZONTAL SCROLL */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar">

          {filteredFoods.map(food => (
            <div
              key={food.id}
              className="
                snap-start flex-shrink-0
                w-[80%] sm:w-[48%] lg:w-[32%]
                bg-[#fff7ed] dark:bg-[#1e1e1e]
                rounded-2xl overflow-hidden
                transition hover:shadow-xl
              "
            >
              {/* ✅ IMAGE LAZY LOAD */}
              <div className="relative aspect-square">
                <img
                  src={food.img}
                  alt={food.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />

                <span className="absolute top-3 left-3 bg-orange-600 text-white text-xs px-3 py-1 rounded-full">
                  {food.tag}
                </span>

                <span
                  className={`absolute top-3 right-3 w-4 h-4 rounded-full ${food.type === "veg"
                      ? "bg-green-500"
                      : food.type === "nonveg"
                        ? "bg-red-500"
                        : "bg-yellow-400"
                    }`}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl text-white font-bold mb-1">
                  {food.name}
                </h3>

                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                  {food.desc}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-orange-700">
                    {food.price}
                  </span>

                  <button
                    onClick={() => addToCart(food)}
                    className="bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-orange-700 transition"
                  >
                    <i className="fa-solid fa-cart-plus mr-2"></i>
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};


export default Menu;

