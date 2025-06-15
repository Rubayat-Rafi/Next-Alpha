import Title from "@/components/Title";
import { GoCheck } from "react-icons/go";

const Includes = () => {
    return (
        <section className="bg-[#765eff]/5">
            <div className="py-16 lg:py-28 max-w-[1440px] mx-auto w-11/12">
                {/* <h3 className="text-base md:text-xl lg:text-2xl font-medium text-center mb-6 text-TextColor">
                What's Included in Your Video Editing:
                </h3> */}
                <div className="lg:px-[20%] xl:px-[30%]">
                    <Title
                        heading={"What AP Offer!"}
                        title={"What's Included in "}
                        styleTitle={"Your Video Editing?"}
                    ></Title>
                </div>

                <div className="max-w-[700px] mx-auto mt-10">
                    <div style={{ background: "linear-gradient(90deg, rgba(252,252,250,0.05) 30%, rgba(118,94,255,1) 100%)", backgroundRepeat: "no-repeat" }} className=" border rounded-2xl border-[#fcfcfa]/20 p-8 lg:p-10  space-y-5 text-TextColor text-xs md:text-base lg:text-lg overflow-hidden"
                    >
                        <p className="flex items-center gap-3">
                            <span className="text-MainColor text-lg md:text-xl lg:text-2xl">
                                <GoCheck />
                            </span>
                            Years of professional editing with top-tier tools
                        </p>
                        <p className="flex items-center gap-3">

                            <span className="text-MainColor text-lg md:text-xl lg:text-2xl">
                                <GoCheck />
                            </span>
                            Tailored edits to match client needs
                        </p>
                        <p className="flex items-center gap-3">

                            <span className="text-MainColor text-lg md:text-xl lg:text-2xl">
                                <GoCheck />
                            </span>
                            3-7 days with rush options
                        </p>
                        <p className="flex items-center gap-3">
                            <span className="text-MainColor text-lg md:text-xl lg:text-2xl">
                                <GoCheck />
                            </span>
                            Use of motion graphics, VFX, and color grading
                        </p>
                        <p className="flex items-center gap-3">
                            <span className="text-MainColor text-lg md:text-xl lg:text-2xl">
                                <GoCheck />
                            </span>
                            Platform-specific optimization (YouTube, Instagram, TikTok)
                        </p>
                        <p className="flex items-center gap-3">

                            <span className="text-MainColor text-lg md:text-xl lg:text-2xl">
                                <GoCheck />
                            </span>
                            Direct, transparent, and timely
                        </p>
                        <p className="flex items-center gap-3">

                            <span className="text-MainColor text-lg md:text-xl lg:text-2xl">
                                <GoCheck />
                            </span>
                            Competitive rates with no compromise on quality
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Includes;