'use client'
import Image from 'next/image';
import React, { useEffect} from 'react';
import myProfile from "../../../public/Imam.jpg";
import { usePathname } from 'next/navigation';

const AboutPage = () => {
    const pathname = usePathname();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return (
        <div className=" max-w-[1440px] mx-auto w-11/12 flex items-center flex-col-reverse lg:flex-row gap-8 py-16 md:py-28  min-h-[calc(100vh-496px)]">
            <div className="lg:w-1/2 space-y-6 md:space-y-12">
                <p className="text-SecondTextColor font-normal text-base lg:text-xl">
                    <span className="text-mainColor font-semibold ">AlphaVideoEdit.com</span> is powered by  Imam Hasan Turzo, a seasoned video
                    editor passionate about delivering impactful, high-quality videos
                    that elevate your brand&apos;s reach and audience engagement. With
                    expertise in long-form content editing, short-form social media
                    videos, and creative promotional editing,  Imam Hasan Turzo has
                    successfully helped numerous creators, educators, and businesses
                    tell their unique stories through exceptional visuals.
                </p>
                <p className="text-SecondTextColor font-normal text-base lg:text-xl">At <span className="text-mainColor font-semibold">AlphaVideoEdit.com</span>, we combine creativity, precision, and innovation to transform raw footage into polished masterpieces. Whether you&apos;re a content creator looking to grow your audience, an educator aiming to engage students, or a business owner seeking to stand out online, we craft videos tailored to your goals.</p>
            </div>

            <div className="lg:w-1/2">
                <Image
                    className={`w-full rounded-2xl shadow-lg shadow-MainColor border border-[#fcfcfa]/20`}
                    src={myProfile}
                    alt="Imam Hasan Turzo - Video Editor"
                    width={500}
                    height={500}
                    priority
                />
            </div>

        </div>
    );
};

export default AboutPage;