"use client"

import React, { useState } from 'react';
import Title from './Title';
import Loading from './Loading';

const LongForm = () => {
    const [loadingStates, setLoadingStates] = useState({
        video1: true,
        video2: true,
        video3: true
      });



    return (
        <div id="long-form" className=" pt-16 lg:pt-28 max-w-[1440px] mx-auto w-11/12">
        <div className="lg:px-[5%]">
          <Title
            heading={"Long-Form"}
            title={" Long-Form Video Editing:"}
            styleTitle={" Transform Raw Footage into Impactful Masterpieces"}
            paragraph={
              "    At AlphaVideoEdit.com, we specialize in professional long-form video editing, designed to captivate and engage diverse audiences. Whether it's documentaries, vlogs, webinars, or educational content, we meticulously cut unnecessary parts, remove mistakes and mispronunciations, and merge clips for smooth storytelling. Our team also sources relevant footage to enhance your narrative, improves audio quality, and adds effects, transitions, motion graphics, and custom 2D animations to visualize your story. Our expert editors transform raw footage into compelling, polished videos that amplify your brand's reach, boost viewer retention, and leave a lasting impression."
            }
          ></Title>
        </div>

        {/* Longform videos  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
      {/* Video 1 */}
      <div className="relative">
        {loadingStates.video1 && (
          <Loading style="absolute rounded-2xl w-full h-[200px] md:h-[350px] lg:h-[400px]" />
        )}
        <iframe
          className={`rounded-2xl w-full h-[200px] md:h-[350px] lg:h-[400px] ${
            loadingStates.video1 ? 'opacity-0' : 'opacity-100'
          }`}
          src="https://www.youtube.com/embed/lHJdHd7ROB4?si=ObjNDo9dCzI8PExc"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setLoadingStates(prev => ({...prev, video1: false}))}
          onError={() => setLoadingStates(prev => ({...prev, video1: false}))}
        ></iframe>
      </div>

      {/* Video 2 */}
      <div className="relative">
        {loadingStates.video2 && (
          <Loading style="absolute rounded-2xl w-full h-[200px] md:h-[350px] lg:h-[400px]" />
        )}
        <iframe
          className={`rounded-2xl w-full h-[200px] md:h-[350px] lg:h-[400px] ${
            loadingStates.video2 ? 'opacity-0' : 'opacity-100'
          }`}
          src="https://www.youtube.com/embed/r5OEAPZw28U?si=u58WWiINegx_CcC4"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setLoadingStates(prev => ({...prev, video2: false}))}
          onError={() => setLoadingStates(prev => ({...prev, video2: false}))}
        ></iframe>
      </div>

      {/* Video 3 - Full width on lg screens */}
      <div className="lg:col-span-2 flex justify-center relative">
        {loadingStates.video3 && (
          <Loading style="absolute rounded-2xl w-full lg:w-1/2 h-[200px] md:h-[350px] lg:h-[400px]" />
        )}
        <iframe
          className={`rounded-2xl w-full lg:w-1/2 h-[200px] md:h-[350px] lg:h-[400px] ${
            loadingStates.video3 ? 'opacity-0' : 'opacity-100'
          }`}
          src="https://www.youtube.com/embed/g62bzoH672w?si=SMrOsJ8pgHfplvAV"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setLoadingStates(prev => ({...prev, video3: false}))}
          onError={() => setLoadingStates(prev => ({...prev, video3: false}))}
        ></iframe>
      </div>
    </div>


      </div>
    );
};

export default LongForm;