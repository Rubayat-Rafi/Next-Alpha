"use client";

import { useState } from "react";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { RiMenu3Line } from "react-icons/ri";
import Link from "next/link";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const links = (
        <ul className="flex flex-col items-start lg:text-center lg:items-center lg:flex-row lg:space-x-8 text-sm space-y-5 lg:space-y-0 lg:text-[10px]">
            <li>
                <Link
                    onClick={() => setIsOpen(false)}
                    href="/#long-form"
                    className="hover:text-SecondTextColor transition cursor-pointer"
                >
                    <span className="lg:text-[16px] lg:block">Long-Form </span>Video
                    Editing
                </Link>
            </li>
            <li>
                <Link
                    onClick={() => setIsOpen(false)}
                    href="/#short-form"
                    className="hover:text-SecondTextColor transition cursor-pointer"
                >
                    <span className="lg:text-[16px] lg:block">Short-Form </span>Content
                    Editing
                </Link>
            </li>
            <li>
                <Link
                    onClick={() => setIsOpen(false)}
                    href="/#results"
                    className="hover:text-SecondTextColor transition cursor-pointer"
                >
                    <span className="lg:text-[16px] lg:block">Our Success </span>Stories
                </Link>
            </li>
            <li>
                <Link
                    onClick={() => setIsOpen(false)}
                    href="/#services"
                    className="hover:text-SecondTextColor transition cursor-pointer"
                >
                    <span className="lg:text-[16px] lg:block">Our Video</span> Editing
                    Services
                </Link>
            </li>
            <li>
                <Link
                    onClick={() => setIsOpen(false)}
                    href="/#pricing"
                    className="hover:text-SecondTextColor flex flex-row lg:block transition cursor-pointer space-x-1 lg:space-x-0"
                >
                    <p className="lg:text-[16px] lg:block">Plans </p>
                    <span>& </span>
                    <span>Pricing</span>
                </Link>
            </li>
            <li>
                <Link
                    onClick={() => setIsOpen(false)}
                    href="/#faq"
                    className="hover:text-SecondTextColor transition cursor-pointer"
                >
                    <span className="lg:text-[16px]">FAQs</span>
                </Link>
            </li>
            <li>
                <Link
                    onClick={() => setIsOpen(false)}
                    href="/#book-a-call"
                    className="bg-MainColor text-TextColor px-2 py-2 lg:py-3 lg:px-4 rounded-lg w-full outline-3 hover:outline-offset-4 outline-[#fcfcfa]/5 hover:outline-mainColor transition-all cursor-pointer"
                >
                    <span className="lg:text-[16px]">Book a call</span>
                </Link>
            </li>
        </ul>
    );

    return (
        <nav
            className="lg:backdrop-blur-2xl text-TextColor py-4 px-6 mx-auto flex items-center justify-between relative lg:border border-[#fcfcfa]/20  lg:rounded-xl lg:bg-TextColor/5 lg:max-w-[910px] bg-[#0a0416] lg:bg-[#fcfcfa]/5 "
        >
            {/* Logo */}
            <Link href="/">
                <Image
                    src="/logo Main.png"
                    alt="Alpha Video Editing Logo"
                    width={48}
                    height={48}
                    priority
                    className="w-10 lg:w-12"
                />
            </Link>

            {/* Navigation Links for desktop */}
            <div className="hidden lg:block">{links}</div>

            {/* Hamburger menu for mobile */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-2xl cursor-pointer"
            >
                {isOpen ? <RxCross2 /> : <RiMenu3Line />}
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="bg-BgColor absolute top-full left-0 w-full text-xs flex flex-col items-start p-6 lg:hidden text-center duration-500 transition-transform">
                    {links}
                </div>
            )}
        </nav>
    );
};

export default Navbar;