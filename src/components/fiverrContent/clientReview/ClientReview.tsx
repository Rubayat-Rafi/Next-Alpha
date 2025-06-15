import Reviews from '@/components/Reviews';
import Title from '@/components/Title';
import React from 'react';

const ClientReview = () => {
    return (
        <section id="reviews" className=" py-16 lg:py-28 ">
            <div className="flex flex-col items-center justify-center max-w-[1440px] mx-auto w-11/12">
                <div className="mb-10 md:w-4/6 ">
                    <Title
                        heading={"What My Clients Say"}
                        title={"There’s a reason people are raving"}
                        styleTitle={" about us."}
                    ></Title>
                </div>
                <Reviews />
            </div>
        </section>
    );
};

export default ClientReview;