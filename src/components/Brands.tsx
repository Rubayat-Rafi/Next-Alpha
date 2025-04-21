import React from 'react';
import "./style/brands.css";
import Image from 'next/image';

import brand1 from "../../public/BrandImages/pngwing.com (1).png";
import brand2 from "../../public/BrandImages/pngwing.com (2).png";
import brand3 from "../../public/BrandImages/pngwing.com (3).png";
import brand4 from "../../public/BrandImages/5.png";
import brand5 from "../../public/BrandImages/8 (2).png";
import brand6 from "../../public/BrandImages/6.png";
import brand7 from "../../public/BrandImages/7.png";
import brand8 from "../../public/BrandImages/8.png";

const brandImages = [
  { id: 1, src: brand1, alt: "brand 1" },
  { id: 2, src: brand2, alt: "brand 2" },
  { id: 3, src: brand3, alt: "brand 3" },
  { id: 4, src: brand4, alt: "brand 4" },
  { id: 5, src: brand5, alt: "brand 5" },
  { id: 6, src: brand6, alt: "brand 6" },
  { id: 7, src: brand7, alt: "brand 7" },
  { id: 8, src: brand8, alt: "brand 8" },
];


const Brands = () => {
  return (
    <div className=" pt-12 md:pt-16 lg:pt-24 max-w-[1440px] mx-auto w-11/12">
      <h3 className="text-center text-SecondTextColor text-sm md:text-base lg:text-lg mb-10">
        You&apos;re in good hands:
      </h3>

      <div className="wrapper">
        {brandImages.map((brand, index) => (
          <div 
            key={brand.id} 
            className={`item item${index + 1}`}
          >
            <Image 
              src={brand.src} 
              alt={brand.alt}
              width={150}
              height={70}
              className={index === 1 ? "object-cover rounded-md" : index === 7 ? "w-full" : ""}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;