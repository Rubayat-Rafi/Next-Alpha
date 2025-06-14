import Link from 'next/link';
import React from 'react';
import { FaBolt, FaShoppingCart, FaSmileBeam, FaYoutube } from 'react-icons/fa';
const FBanner = () => {
 const items = [
        { icon: FaBolt, title: "Fast delivery" },
        { icon: FaYoutube, title: "Works with channels of 100K+ subs" },
        { icon: FaSmileBeam, title: "100% Satisfaction" },
    ];

    return (
        <section className='max-w-[1440px] mx-auto w-11/12 py-16 md:py-24 relative'>
            <div className="relative z-10 text-center flex flex-col items-center gap-6 mt-10">
                {/* Main Heading */}
                <div className="lg:px-[15%]">
                    <h1 className="text-center text-2xl md:text-4xl lg:text-[60px] lg:leading-[66px] font-bold leading-tight">
                        <span>Get Pro YouTube Videos Edited in 20 Hours by a highly </span>
                        <span className="font-Instrument text-mainColor tracking-wider">
                            experienced Fiverr Video Editor
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-center leading-5 md:leading-7 text-gray-400 text-xs md:text-base lg:px-16 lg:text-lg mt-4 md:mt-6">
                        Trusted by YouTubers, fitness coaches, doctors & businesses with over 150+ 5-star reviews and millions of views.
                    </p>
                </div>

                {/* card content  */}
                <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6  z-10">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#fcfcfa]/5 backdrop-blur-2xl border border-[#fcfcfa]/20 rounded-xl p-6 flex flex-col items-center gap-4 shadow-lg hover:shadow-xl transition duration-300"
                        >
                            <item.icon className="text-green-400 text-5xl" />
                            <p className="font-medium text-gray-400">{item.title}</p>
                        </div>
                    ))}
                </div>

                <Link
                    href="https://www.fiverr.com/s/5reb457"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-[#1DBF73] hover:bg-[#19a863] text-white font-semibold text-lg py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2"
                >
                    <FaShoppingCart /> Order Now on Fiverr
                </Link>
            </div>


            {/* Banner Glow Effect */}
            <div className="absolute inset-0 bg-thirdBanner h-full w-full bg-no-repeat bg-cover bg-bottom z-0"></div>
        </section>
    );
};

export default FBanner;