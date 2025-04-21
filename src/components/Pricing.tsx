import React from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import Title from './Title';

const Pricing = () => {
    return (
        <div id="pricing" className=" py-16 md:py-28 flex items-center justify-center flex-col max-w-[1440px] mx-auto w-11/12">
        <div className="mb-8 lg:mb-24 lg:w-4/5 ">
          <Title
            heading={"Pricing"}
            title={"Use our world-class video editors to "}
            styleTitle={"grow faster."}
            paragraph={
              "No monthly retainers - pick your credits and use them anytime within 6 months"
            }
          ></Title>
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {/* package 1 */}
          <div className="border border-[#fcfcfa]/20 rounded-2xl px-8 py-6 md:py-10">
            <h3 className=" text-xl md:text-3xl py-6 font-normal">Starter Plan</h3>
            <div className="border border-t border-[#fcfcfa]/20"></div>
            <h1 className=" text-3xl md:text-5xl py-6 font-semibold">Price: $499</h1>
            <div className="flex justify-center items-center border border-[#fcfcfa]/20 rounded-lg p-4">
              <a target="_blank" href="https://tidycal.com/alphavideoedit2001/15-minute-meeting" className="bg-TextColor/5 border border-[#fcfcfa]/20 w-full py-3 rounded-md  text-base md:text-lg font-medium text-center">
                Book a call
              </a>
            </div>
            <div className="mt-6">
              <h4 className=" text-base md:text-lg font-normal text-SecondTextColor mb-6">
                What’s included:
              </h4>
              <u className="list-none no-underline text-TextColor text-sm md:text-lg space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-xl">
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  10 short form video credits
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  Up to 60 seconds each
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  Unlimited revisions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  Personalized video branding
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  Average 1-2 days turnaround
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  Easy credit-card payments
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  Pause or cancel anytime
                </li>
              </u>
            </div>
          </div>
  
          {/* package 2 */}
          <div
            style={{
              background:
                "linear-gradient(0deg, rgba(252,252,250,0.05) 10%, rgba(118,94,255,1) 100%)",
              backgroundRepeat: "no-repeat",
            }}
            className="border border-[#fcfcfa]/20 rounded-2xl px-8 py-6 md:py-10 lg:-mt-12"
          >
            <h3 className="text-xl md:text-3xl py-6 font-normal">Professional Plan</h3>
            <div className="border border-t border-[#fcfcfa]/20"></div>
            <h1 className="text-3xl md:text-5xl py-6 font-semibold">Price: $990</h1>
            <div className=" flex justify-center items-center border border-[#fcfcfa]/20 rounded-lg p-4">
              <a target="_blank" href="https://tidycal.com/alphavideoedit2001/15-minute-meeting" className="bg-TextColor/5 border border-[#fcfcfa]/20 w-full py-3 rounded-md text-base md:text-lg font-medium text-center">
                Book a call
              </a>
            </div>
            <div className="mt-6">
              <h4 className=" text-base md:text-lg font-normal text-SecondTextColor mb-6">
                What’s included:
              </h4>
              <u className="list-none no-underline text-TextColor text-sm md:text-lg space-y-3">
                <li className="flex items-center gap-2">
  
                  <span className="text-xl">
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  10 Long form video credits
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  Up to 10 minutes each
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  Unlimited revisions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  Advanced motion graphics and effects
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  Personalized video branding with custom animations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  Average 2-day turnaround
                </li>
  
                <li className="flex items-center gap-2">
                  <span className="text-xl">
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  Easy credit-card payments
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  Pause or cancel anytime
                </li>
              </u>
            </div>
          </div>
  
          {/* package 3 */}
          <div className="border border-[#fcfcfa]/20 rounded-2xl px-8 py-6 md:py-10">
            <h3 className="text-xl md:text-3xl py-6 font-normal">Premium Plan</h3>
            <div className="border border-t border-[#fcfcfa]/20"></div>
            <h1 className="text-3xl md:text-5xl py-6 font-semibold">Price: $1199</h1>
            <div className="flex justify-center items-center border border-[#fcfcfa]/20 rounded-lg p-4">
              <a target="_blank" href="https://tidycal.com/alphavideoedit2001/15-minute-meeting" className="bg-TextColor/5 border border-[#fcfcfa]/20 w-full py-3 rounded-md text-base md:text-lg font-medium text-center">
                Book a call
              </a>
            </div>
            <div className="mt-6">
              <h4 className=" text-base md:text-lg font-normal text-SecondTextColor mb-6">
                What’s included:
              </h4>
              <u className="list-none no-underline text-TextColor text-sm md:text-lg space-y-3">
                <li className="flex items-center gap-2">
  
                  <span className="text-xl">
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  10 Long form video credits(10 minutes)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  10 short-form video credits ( 60 seconds)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  Unlimited revisions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  Advanced motion graphics and effects
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  Personalized video branding with custom animations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  Average 2-day turnaround
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  Easy credit-card payments
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">
                    <IoMdCheckmarkCircleOutline />
                  </span>
                  Pause or cancel anytime
                </li>
              </u>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Pricing;