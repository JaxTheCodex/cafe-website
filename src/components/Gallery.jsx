import { memo } from "react";

import img1 from "../assets/images/gallery (1).jpg";
import img2 from "../assets/images/gallery (2).jpg";
import img3 from "../assets/images/gallery (3).jpg";
import img4 from "../assets/images/gallery (4).jpg";
import img5 from "../assets/images/gallery (5).jpg";
import img6 from "../assets/images/gallery (6).jpg";
import img7 from "../assets/images/gallery (7).jpg";
import img8 from "../assets/images/gallery (8).jpg";

const galleryImages = [
  img1, img2, img3, img4, img5, img6, img7, img8
];

const Gallery = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-20" id="gallery">
      
      {/* 🔥 HEADER */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Gallery
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl">
          A glimpse of our delicious food, cozy space & happy moments
        </p>
      </div>

      {/* 🧱 TRUE MASONRY (NO DISTORTION) */}
      <div
        className="
          columns-1
          sm:columns-2
          md:columns-3
          lg:columns-4
          gap-6
        "
      >
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="
              mb-6
              break-inside-avoid
              rounded-2xl
              overflow-hidden
              shadow-md
              hover:shadow-xl
              transition
              group
              bg-black/5
            "
          >
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              loading="lazy"
              className="
                w-full
                h-auto
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Gallery);
