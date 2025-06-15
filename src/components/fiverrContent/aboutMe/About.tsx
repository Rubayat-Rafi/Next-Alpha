import Image from 'next/image';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
    return (
        <section className="py-16 lg:py-28 max-w-[1440px] mx-auto w-11/12">
            <div className="flex items-center justify-center">
                <span className='py-2 px-4 border rounded-lg mb-4 md:mb-6 border-[#fcfcfa]/20 font-medium text-xs md:text-sm lg:text-base' >About Me</span>
            </div>
            <div className="flex flex-col lg:flex-row gap-10 items-center mt-10">
                {/* Image section */}
                <div className="w-full  lg:w-1/2">
                    <Image
                        src="/Imam.jpg"
                        alt="Imam Hassan"
                        width={500}
                        height={500}
                        className="rounded-xl shadow-lg object-cover w-full  shadow-MainColor border border-[#fcfcfa]/20"
                    />
                </div>

                {/* Content section */}
                <div className="w-full lg:w-1/2 space-y-6">
                    {/* <h2 className="text-3xl font-bold text-gray-800">About Me</h2> */}
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Hey, I’m <span className="font-semibold">Imam Hassan</span> — a professional video editor with over <strong>4 years of experience</strong>, helping more than <strong>500 creators</strong> across the globe. I’ve worked with YouTubers like <strong>Topher A. (114K subs)</strong> and <strong>Kwaku (90K subs)</strong>, consistently earning <strong>5-star reviews</strong> and building videos that retain, engage, and convert.
                    </p>

                    <ul className="space-y-2 text-gray-500">
                        <li className="flex items-center gap-2">
                            <FaCheckCircle className="text-green-500" /> 150+ 5-star reviews
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheckCircle className="text-green-500" /> 4 years of experience
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheckCircle className="text-green-500" /> Worked with top YouTubers & entrepreneurs
                        </li>
                        <li className="flex items-center gap-2">
                            <FaCheckCircle className="text-green-500" /> Focused on growth, retention, and video virality
                        </li>
                    </ul>

                    <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-lg mt-6">
                        <p className="text-green-700 font-medium text-lg">🎯 Ready to upgrade your videos?</p>
                        <p className="text-gray-700 mt-1">
                            Start your order now and get your first video delivered in <strong>under 20 hours</strong>.
                        </p>
                        <p className="text-green-700 font-semibold mt-2">🎁 Bonus: Free thumbnail design for first-time clients!</p>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default About;