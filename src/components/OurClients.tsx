import React from 'react';

const OurClients = () => {

    const shorts = [
        { id: "CxlpHtjCVFw" },
        { id: "I8pRGI89znU" },
    ];


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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mt-10 px-4 md:px-[10%] lg:px-[20%]">
                    {shorts.map((short) => (
                        <div
                            key={short.id}
                            className="relative w-full overflow-hidden border-2 border-[#765eff]/30 rounded-xl aspect-[9/16]"
                        >
                            <iframe
                                src={`https://www.youtube.com/embed/${short.id}?controls=0`}
                                title="YouTube video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full rounded-xl"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default OurClients;