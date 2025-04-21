'use client'

import React, { useState } from 'react';
import Title from './Title';
import Loading from './Loading';

const ShortForm = () => {

    const [loadingStates, setLoadingStates] = useState(
        Array(6).fill(true) // Initialize all 6 videos as loading
    );

    const videoUrls = [
        "https://www.youtube.com/embed/v6dmIpANv8k?rel=0",
        "https://www.youtube.com/embed/yAyIKlgB0Ic?rel=0",
        "https://www.youtube.com/embed/x1ZSbZzbUhA?rel=0",
        "https://www.youtube.com/embed/ZaWJ2jrYB0g?rel=0",
        "https://www.youtube.com/embed/oiAqEuy_I-Q?rel=0",
        "https://www.youtube.com/embed/SjmBlOv2tk8?rel=0"
    ];

    const handleLoad = (index: number) => {
        setLoadingStates(prev => {
            const newStates = [...prev];
            newStates[index] = false;
            return newStates;
        });
    };
    return (
        <div id="short-form" className="py-16 lg:py-28 max-w-[1440px] mx-auto w-11/12">
            <div className="lg:px-[5%]">
                <Title
                    heading={"Short-Form"}
                    title={"Professional Short-Form Video Editing "}
                    styleTitle={"Captivating Content for Maximum Engagement"}
                    paragraph={
                        "AlphaVideoEdit.com specializes in short-form content editing to elevate your online presence. From Instagram Reels and YouTube Shorts to TikTok videos, we create scroll-stopping content with precision edits, creative transitions, and motion graphics. Our expertise turns raw footage into shareable, visually engaging videos that amplify your brand reach and captivate audiences."
                    }
                ></Title>
            </div>
            {/* Short fom videos */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-16 mt-10 px-[6%] md:px-[12%] lg:px-[5%]">
                {videoUrls.map((url, index) => (
                    <div key={index} className="relative">
                        {/* Loading Skeleton */}
                        {loadingStates[index] && (
                            <Loading style={`absolute rounded-2xl w-full h-[250px] md:h-[400px] lg:h-[700px]`} />
                        )}

                        {/* YouTube Iframe */}
                        <iframe
                            className={`rounded-2xl w-full h-[250px] md:h-[400px] lg:h-[700px] ${loadingStates[index] ? 'opacity-0' : 'opacity-100'
                                }`}
                            src={url}
                            title={`YouTube video player ${index + 1}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            onLoad={() => handleLoad(index)}
                            onError={() => handleLoad(index)}
                        />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ShortForm;