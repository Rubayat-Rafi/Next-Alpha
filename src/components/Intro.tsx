import { YouTubeEmbed } from "@next/third-parties/google";

const Intro = () => {
    return (
        <section className="bg-[#765eff]/5">
            <div className=" py-16 lg:py-28 max-w-[1440px] mx-auto w-11/12">
                <div className="lg:px-[20%]">
                    {/* Main Heading */}
                    <h1 className="text-center text-2xl md:text-4xl lg:text-[60px] md:leading-[66px] font-medium leading-tight">
                        <span>Why Storytelling Matters in </span>
                        <span className="font-Instrument lg:ml-3 italic text-mainColor tracking-wider">
                            Video Editing
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-center text-gray-400 text-xs md:text-base lg:px-16 lg:text-lg mt-4 md:mt-6">
                        Discover how storytelling elevates video editing, captivates
                        audiences, and transforms content into unforgettable experiences for
                        your brand.
                    </p>
                </div>
                {/* Intro Video - Responsive */}
                <div>
                    <div className="mt-10 flex justify-center">
                        <div className="max-h-[400px] w-full max-w-[700px] rounded-2xl overflow-hidden border border-[#fcfcfa]/20">
                            <YouTubeEmbed
                                videoid='M43od-A17No'
                                params="controls=0"
                                style="height: 100%; width: 100%;"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;

{/* <div className="relative w-full max-w-4xl pt-[56%] lg:pt-[50%] xl:pt-[36%] rounded-xl overflow-hidden shadow-md">
    <iframe
        src="https://www.youtube.com/embed/M43od-A17No?controls=0"
        className="absolute top-0 left-0 w-full h-full rounded-xl"
        frameBorder="0"
        allowFullScreen
    />
</div> */}