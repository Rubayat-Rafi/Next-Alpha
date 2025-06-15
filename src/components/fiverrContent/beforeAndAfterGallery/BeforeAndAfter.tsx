import Title from '@/components/Title';
import { YouTubeEmbed } from '@next/third-parties/google';
import React from 'react';

const BeforeAndAfter = () => {

    const gallry = [
        "L8E7wOo4S8g",
        "fXIdfY7AJb8",
        "w9NDmlMd0XY",
        "YnDZDfQ2ORI",
    ]
    return (
        <section className='bg-[#765eff]/5'>
            <div className="py-16 lg:py-28 max-w-[1440px] mx-auto w-11/12">

                {/* heading */}
                <div className="md:px-[15%] lg:px-[15%] xl:px-[25%]">
                    <Title
                        heading={"Before & After Gallery"}
                        title={"See the Transformation "}
                        styleTitle={"Before vs After My Editing"}
                    ></Title>
                </div>

                {/* content */}
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2  gap-6 place-content-center">
                    {
                        gallry.map((item, index) => (
                            <div key={index} className="max-h-[400px]">
                                <YouTubeEmbed
                                    videoid={item}
                                    params="controls=0"
                                    style="height: 100%;"
                                />
                            </div>
                        ))
                    }
                </div>




            </div>

        </section>
    );
};

export default BeforeAndAfter;