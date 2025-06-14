import React from 'react';
import Title from './Title';

const ShortForm = () => {

    const videoUrls = [
        "v6dmIpANv8k",
        "yAyIKlgB0Ic",
        "embed/x1ZSbZzbUhA",
        "ZaWJ2jrYB0g",
        "oiAqEuy_I-Q",
        "SjmBlOv2tk8"
    ];

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
            {/* Short-form Videos - Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 mt-10 px-4 sm:px-8 lg:px-[5%]">
                {videoUrls.map((url, index) => (
                    <div key={index} className="relative w-full pt-[177.77%] rounded-xl overflow-hidden shadow-md">
                        <iframe
                            src={`https://www.youtube.com/embed/${url}?controls=0`}
                            className="absolute top-0 left-0 w-full h-full rounded-xl"
                            frameBorder="0"
                            allowFullScreen
                        />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ShortForm;