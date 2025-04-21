"use client"
import React, { useState } from 'react';
import Loading from './Loading';

const Intro = () => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="bg-[#765eff]/5">
            <div className=" py-16 lg:py-28 max-w-[1440px] mx-auto w-11/12">
                <div className="lg:px-[20%]">
                    {/* Main Heading */}
                    <h1 className="text-center text-2xl md:text-4xl lg:text-[60px] md:leading-[66px] font-medium leading-tight">
                        <span>Why Storytelling Matters in </span>
                        <span className="font-Instrument lg:ml-3 italic text-mainColor tracking-wider">
                            Video Editing
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-center text-gray-400 text-xs md:text-base lg:px-16 lg:text-lg mt-4 md:mt-6">
                        Discover how storytelling elevates video editing, captivates
                        audiences, and transforms content into unforgettable experiences for
                        your brand.
                    </p>
                </div>


                {/* intro video */}
                <div className="flex justify-center mt-10">
                    <div className="w-full lg:w-2/3 aspect-video rounded-2xl overflow-hidden relative bg-gray-100">
                        {loading && (
                            <Loading
                                style="absolute inset-0 w-full h-full rounded-2xl"
                            />
                        )}
                        <iframe
                            className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}
                            src="https://www.youtube.com/embed/M43od-A17No?si=xPTRI46QHYyxXJ8i"
                            title="Introduction Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            onLoad={() => setLoading(false)}
                            onError={() => {
                                setLoading(false);
                            }}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Intro;