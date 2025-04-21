"use client"
import React, { useState } from 'react';
import Loading from './Loading';

const OurClients = () => {
    const [videoLoading, setVideoLoading] = useState({
        video1: true,
        video2: true
    });

    return (
        <div id="results" className="max-w-[1440px] mx-auto w-11/12">
            <div className="py-16 lg:py-28">
                <div className="lg:px-[17%]">
                    <div className="flex items-center flex-col justify-center text-TextColor  text-center">
                        <div className="py-2 px-4 border rounded-lg mb-4 md:mb-6 border-[#fcfcfa]/20 font-medium text-xs md:text-sm lg:text-base">
                            Our Clients
                        </div>
                        <h3 className="mb-3 md:mb-6 text-2xl md:text-4xl lg:text-[60px] md:leading-[66px] font-medium">
                            <span className="block lg:inline">What Our Clients Say </span>
                            <span className="text-mainColor font-Instrument italic ">
                                About Us
                            </span>
                        </h3>
                        <p className="text-xs md:text-base lg:text-lg text-center text-SecondTextColor">
                            Discover how AlphaVideoEdit.com delivers exceptional video editing
                            services that clients trust. Hear firsthand experiences and
                            success stories that showcase our dedication to quality and
                            impactful results.
                        </p>
                    </div>
                </div>
                {/* Video Grid - Updated for YouTube Shorts aspect ratio */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mt-10 md:px-[10%] lg:px-[15%]">
                    {/* Video 1 */}
                    <div className="relative" style={{ paddingBottom: '177.78%' }}> {/* 9:16 aspect ratio container */}
                    {videoLoading.video1 && (
                            <Loading style="absolute top-0 left-0 w-full h-full rounded-2xl" />
                        )}
                        <iframe
                            className={`absolute top-0 left-0 w-full h-full rounded-2xl ${videoLoading.video1 ? 'opacity-0' : 'opacity-100'}`}
                            src="https://www.youtube.com/embed/CxlpHtjCVFw?rel=0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            frameBorder="0"
                            onLoad={() => setVideoLoading(prev => ({ ...prev, video1: false }))}
                            onError={() => setVideoLoading(prev => ({ ...prev, video1: false }))}
                        ></iframe>
                    </div>
                    
                    {/* Video 2 */}
                    <div className="relative" style={{ paddingBottom: '177.78%' }}> {/* 9:16 aspect ratio container */}
                    {videoLoading.video1 && (
                            <Loading style="absolute top-0 left-0 w-full h-full rounded-2xl" />
                        )}
                        <iframe
                           className={`absolute top-0 left-0 w-full h-full rounded-2xl ${videoLoading.video1 ? 'opacity-0' : 'opacity-100'}`}
                            src="https://www.youtube.com/embed/I8pRGI89znU?rel=0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            frameBorder="0"
                            onLoad={() => setVideoLoading(prev => ({ ...prev, video2: false }))}
                            onError={() => setVideoLoading(prev => ({ ...prev, video2: false }))}
                        ></iframe>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default OurClients;