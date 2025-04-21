import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import emailjs from "@emailjs/browser";
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../public/logo Main.png";

const Footer = () => {
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        emailjs
            .sendForm(
                "service_7ah632q", // Your EmailJS Service ID
                "template_wybtn6q", // Your EmailJS Template ID
                form.current!, // Reference to the form
                "0Ve5RDNi5S2zT_KVR" // Your Public Key (User ID)
            )
            .then(
                () => {
                    // SweetAlert2Show success message
                    Swal.fire({
                        title: "SUCCESS!",
                        text: "Email sent successfully!",
                        icon: "success",
                    });
                    form.current?.reset();
                },
                (error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `Failed to send email. ${error.message}`,
                    });
                }
            );
    };

    return (
        <div className="relative border-t border-[#fcfcfa]/20 ">
            <div className="py-14 max-w-[1440px] w-11/12 mx-auto">
                <Link href="/">
                    <Image src={logo} alt="logo" className=" w-14 md:w-16 mb-8" />
                </Link>

                <div className="flex flex-col-reverse md:flex-row justify-between">
                    <div className="text-TextColor">
                        <h6 className="text-lg font-semibold mb-4">Join Our Newsletter</h6>
                        <p className="max-w-[500px] text-base text-SecondTextColor">
                            Sign up to our mailing list below and be the first to know about
                            new updates. Don&apos;t worry, we hate spam too.
                        </p>

                        <div className="mt-3">
                            <form ref={form} onSubmit={handleSubmit} className="space-x-2">
                                <input
                                    type="email"
                                    name="email" // Matches EmailJS placeholder
                                    className="py-2 md:px-4 pl-2 rounded-lg bg-[#fcfcfa]/20 placeholder:text-[#fcfcfa] placeholder:text-xs md:placeholder:text-sm border border-[#fcfcfa]/50 w-[180px] md:w-[270px] outline-none text-xs md:text-base"
                                    placeholder="Your Email Address"
                                    required // Ensure the field is not empty
                                />
                                <button
                                    type="submit"
                                    className="bg-MainColor text-sm md:text-base md:py-2 rounded-lg md:px-4 py-2 px-1 font-medium md:font-medium"
                                >
                                    Get Notified
                                </button>
                            </form>
                        </div>

                        <div className="space-y-2 mt-4 md:mt-6">
                            <h6 className="text-lg font-semibold">For more info</h6>
                            <p className="max-w-[500px] text-base text-SecondTextColor">
                                What&apos;s App: +8801889029116
                            </p>
                            <p className="max-w-[500px] text-base text-SecondTextColor">
                                Email: alphavideoedit.com@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-8 md:flex-row flex-col mb-10">
                        <nav>
                            <h3 className="text-base text-TextColor mb-5">Social</h3>
                            <div className="flex md:flex-col  md:space-x-0 space-x-4 md:space-y-4 text-sm text-SecondTextColor flex-wrap">
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/in/imam-hasan-666021204/"
                                    className="hover:underline"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.youtube.com/@AlphaVideoEdit"
                                    className="hover:underline"
                                >
                                    YouTube
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.instagram.com/alphavideoedit/"
                                    className="hover:underline"
                                >
                                    Instagram
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.facebook.com/people/Alphavideoeditcom/61566444836135/?mibextid=ZbWKwL"
                                    className="hover:underline"
                                >
                                    Facebook
                                </a>
                            </div>
                        </nav>
                        <nav>
                            <h3 className="text-base text-TextColor mb-5">Information</h3>
                            <div className="md:space-y-4 text-sm text-SecondTextColor flex space-x-4 md:flex-col md:space-x-0">
                                <Link href="/#faq" className="hover:underline">
                                    FAQ
                                </Link>
                                <a
                                    target="_blank"
                                    href="https://tidycal.com/alphavideoedit2001/15-minute-meeting"
                                    className="hover:underline"
                                >
                                    Contact Us
                                </a>
                                <Link href="/about" className="hover:underline">
                                    About Us
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="container mx-auto text-center -mt-6 mb-4 text-SecondTextColor text-xs md:text-base">
                <p>&copy; 2025 Alpha Video Edit. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;