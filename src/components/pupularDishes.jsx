import { useRef } from "react";
import { useCart } from "../context/CartContext";

import item1 from "../assets/images/item (11).jpg";
import item2 from "../assets/images/item (8).jpg";
import item3 from "../assets/images/item (18).jpg";
import item4 from "../assets/images/item (13).jpg";
import item5 from "../assets/images/item (20).jpg";
import item6 from "../assets/images/item.jpg";

/* 🔥 Popular dishes data */
const popularDishes = [
  {
    id: 1,
    name: "Masala Tea",
    desc: "Strong desi tea brewed with aromatic spices",
    price: "₹20",
    img: item1,
  },
  {
    id: 2,
    name: "Veg Sandwich",
    desc: "Fresh veggies layered with buttered bread",
    price: "₹60",
    img: item2,
  },
  {
    id: 3,
    name: "Chicken Roll",
    desc: "Spicy chicken wrapped in soft roti",
    price: "₹90",
    img: item3,
  },
  {
    id: 4,
    name: "Cold Coffee",
    desc: "Chilled creamy coffee with ice",
    price: "₹70",
    img: item4,
  },
  {
    id: 5,
    name: "Samosa",
    desc: "Crispy fried samosa with spicy filling",
    price: "₹15",
    img: item5,
  },
];

const PopularDishes = () => {
  const sliderRef = useRef(null);
  const { addToCart } = useCart();
  

  /* ⬅️➡️ Scroll function */
  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const scrollAmount = sliderRef.current.offsetWidth * 0.8;

    sliderRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* 🔥 HEADER */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Popular Dishes
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Customer favorites you must try
          </p>
        </div>

        {/* ⬅️➡️ NAV BUTTONS */}
        <div className="flex gap-3">
          <button
            onClick={() => scroll("prev")}
            className="
              w-10 h-10 rounded-full
              bg-gray-200 text-gray-700
              hover:bg-orange-500 hover:text-white
              transition
            "
          >
            ‹
          </button>

          <button
            onClick={() => scroll("next")}
            className="
              w-10 h-10 rounded-full
              bg-gray-200 text-gray-700
              hover:bg-orange-500 hover:text-white
              transition
            "
          >
            ›
          </button>
        </div>
      </div>

      {/* 🧾 CARDS SLIDER */}
      <div
        ref={sliderRef}
        className="
          flex gap-6 overflow-x-auto
          scroll-smooth snap-x snap-mandatory
          pb-4 hide-scrollbar
        "
      >
        {popularDishes.map((dish) => (
          <div
            key={dish.id}
            className="
              snap-start flex-shrink-0
              w-[70%] sm:w-[45%] md:w-[30%] lg:w-[23%]
              bg-white rounded-2xl overflow-hidden
              shadow-md hover:shadow-xl
              transition
            "
          >
            {/* 🍽 IMAGE */}
            <div className="h-44 overflow-hidden">
              <img
                src={dish.img}
                alt={dish.name}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </div>

            {/* 📄 CONTENT */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900">
                {dish.name}
              </h3>

              <p className="text-sm text-gray-600 mt-1 mb-3">
                {dish.desc}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-orange-600">
                  {dish.price}
                </span>

                <button
                  onClick={() => addToCart(dish)}
                  className="
                    bg-orange-500 text-white
                    px-4 py-2 rounded-full
                    text-sm font-semibold
                    hover:bg-orange-600
                    transition
                  "
                >
                  <i className="fa-solid fa-cart-plus mr-1"></i>
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDishes;
