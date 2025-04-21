'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import myProfile from "../../../public/ProfileImage/Imam.jpg";
import Loading from '@/components/Loading';
import { usePathname } from 'next/navigation';

const AboutPage = () => {
    const pathname = usePathname();
    const [imageLoading, setImageLoading] = useState(true);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);


    return (
        <div className="max-w-[1440px] mx-auto w-11/12 flex items-start flex-col-reverse lg:flex-row gap-8 py-16 md:py-28  min-h-[calc(100vh-496px)]">
            <div className="lg:w-1/2 space-y-4">
                <p className="text-SecondTextColor font-normal text-base lg:text-xl">
                    <span className="text-MainColor font-semibold ">AlphaVideoEdit.com</span> is powered by  Imam Hasan Turzo, a seasoned video
                    editor passionate about delivering impactful, high-quality videos
                    that elevate your brand&apos;s reach and audience engagement. With
                    expertise in long-form content editing, short-form social media
                    videos, and creative promotional editing,  Imam Hasan Turzo has
                    successfully helped numerous creators, educators, and businesses
                    tell their unique stories through exceptional visuals.
                </p>
                <p className="text-SecondTextColor font-normal text-base lg:text-xl">At <span className="text-MainColor font-semibold">AlphaVideoEdit.com</span>, we combine creativity, precision, and innovation to transform raw footage into polished masterpieces. Whether you&apos;re a content creator looking to grow your audience, an educator aiming to engage students, or a business owner seeking to stand out online, we craft videos tailored to your goals.</p>
            </div>



            {/* Image with Skeleton - Right Side */}
            <div className="lg:w-1/2 relative">
                {/* Skeleton shows while image loads */}
                {imageLoading && (
                    <Loading style='absolute inset-0 bg-gray-200 rounded-2xl animate-pulse z-10' />
                )}

                <Image
                    className={`w-full rounded-2xl shadow-lg shadow-MainColor transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'
                        }`}
                    src={myProfile}
                    alt="Imam Hasan Turzo - Video Editor"
                    width={600}
                    height={800}
                    priority
                    onLoadingComplete={() => setImageLoading(false)}
                    onError={() => setImageLoading(false)} 
                />
            </div>

        </div>
    );
};

export default AboutPage;