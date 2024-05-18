'use client'

import React, { useEffect } from 'react';

const AboutPage = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <main>
      <div className="relative md:mb-24">
        <img
          src="/images/about-page/about-banner-blurred.png"
          data-src="/images/about-page/about-banner.png"
          className="lg:h-[600px] object-cover w-full lazyload"
        />
        <h1 className="absolute top-[15%] left-0 text-white text-3xl md:text-7xl w-full text-center">Get to know us!</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-4 gap-y-4 md:mt-10 md:pb-20 border-b">
        <div className="flex flex-col justify-center items-center gap-y-2 md:gap-y-6 p-4">
          <h2 className="text-2xl md:text-4xl my-2">Our Journey</h2>
          <p className="text-sm md:text-lg lg:mx-8">Established in 1987 by the visionary Mr. R.R. Goyal, our journey reflects decades of unwavering service and commitment. Evolving from humble beginnings, we stand as a testament to his enduring legacy, driving excellence, innovation, and customer satisfaction.</p>
        </div>
        <div className="hidden md:block">
          <img
            src="/images/about-page/section-1-blurred.jpg"
            data-src="/images/about-page/section-1.jpg"
            className="h-[500px] lazyload"
          />
        </div>
      </div>
      <h2 className="w-full text-center text-2xl md:text-5xl mt-4 md:mt-12 md:mb-16">Our Promises</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 pb-16 border-b px-12">
        <div className="flex flex-col gap-y-6 p-4 justify-top items-center">
          <img
            className="rounded-[50%] aspect-square object-cover w-[150px] md:w-[350px] lazyload"
            src="/images/about-page/section-2a-blurred.jpg"
            data-src="/images/about-page/section-2a.jpg"
          />
          <h2 className="text-lg md:text-3xl text-center">Cultivating Sustainable Futures</h2>
          <p className="text-sm md:text-base text-center">{`At Excel Rasayan Export, we're dedicated to revolutionising agriculture with an enduring commitment. We promise to lead in sustainable innovation, prioritise environmental stewardship, empower farming communities, build transparent partnerships, and shoulder global responsibilities. Envisioning a future of positive change, we strive to sow the seeds of innovation, sustainability, and prosperity for farmers worldwide. Join us at Excel Rasayan Export as we cultivate a brighter, more sustainable tomorrow.`}</p>
        </div>
        <div className="flex flex-col gap-y-6 p-4 justify-top items-center">
          <img
            className="rounded-[50%] aspect-square object-cover w-[150px] md:w-[350px] lazyload"
            src="/images/about-page/section-2b-blurred.jpg"
            data-src="/images/about-page/section-2b.jpg"
          />
          <h2 className="text-lg md:text-3xl text-center">Embrace Simplicity</h2>
          <p className="text-sm md:text-base text-center">Within the intricate realm of farming, we champion simplicity as the cornerstone of our approach. Collaborating closely with farmers, agronomists, distributors, and the wider farming community, we challenge norms to advance agriculture through straightforward, practical, and innovative solutions in crop protection and beyond.</p>
        </div>
        <div className="flex flex-col gap-y-6 p-4 justify-top items-center">
          <img
            className="rounded-[50%] aspect-square object-cover w-[150px] md:w-[350px] lazyload"
            src="/images/about-page/section-2c-blurred.jpg"
            data-src="/images/about-page/section-2c.jpg"
          />
          <h2 className="text-lg md:text-3xl text-center">Nurturing Growth for Farmers</h2>
          <p className="text-sm md:text-base text-center">Our commitment extends beyond the fields. We stand beside farmers at every juncture of their journey, supporting them from the initial sowing to final sales. From their labor in the field to their families, partnerships, and societal standing, we are dedicated to fostering growth in all aspects of their lives.</p>
        </div>
      </div>
      <h2 className="mt-12 w-full text-center text-5xl mb-16">Our Mission</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 pb-16 border-b px-12">
        <div className="flex flex-col gap-y-6 p-4 justify-top items-center">
          <img
            className="rounded-[50%] aspect-square object-cover w-[150px] md:w-[350px] lazyload"
            src="/images/about-page/section-3a-blurred.jpg"
            data-src="/images/about-page/section-3a.jpg"
          />
          <h2 className="text-lg md:text-3xl text-center">Forge Connections</h2>
          <p className="text-sm md:text-base text-center">At the core of our mission is the desire to build strong relationships with farmers. We foster transparency, openness, and agility, utilising digital technology to construct a robust network that unites people and shapes farming practices across the globe.</p>
        </div>
        <div className="flex flex-col gap-y-6 p-4 justify-top items-center">
          <img
            className="rounded-[50%] aspect-square object-cover w-[150px] md:w-[350px] lazyload"
            src="/images/about-page/section-3b-blurred.jpg"
            data-src="/images/about-page/section-3b.jpg"
          />
          <h2 className="text-lg md:text-3xl text-center">Explore New Horizons</h2>
          <p className="text-sm md:text-base text-center">Recognising the perpetual evolution of farming, we embrace the concept of continuous reinvention. Through our expanding platforms in rapidly growing markets, we swiftly reach and influence farmers worldwide, unlocking new possibilities within agriculture.</p>
        </div>
        <div className="flex flex-col gap-y-6 p-4 justify-top items-center">
          <img
            className="rounded-[50%] aspect-square object-cover w-[150px] md:w-[350px] lazyload"
            src="/images/about-page/section-3c-blurred.jpg"
            data-src="/images/about-page/section-3c.jpg"
          />
          <h2 className="text-lg md:text-3xl text-center">Legacy in Progress</h2>
          <p className="text-sm md:text-base text-center">With roots in a legacy that once transformed deserts into fertile landscapes, we embark on a global mission. Just as we empowered farmers to make deserts green sustainably years ago, our current mission is to empower our people to assist farmers worldwide in achieving remarkable feats.</p>
        </div>
        <div className="flex flex-col gap-y-6 p-4 justify-top items-center">
          <img
            className="rounded-[50%] aspect-square object-cover w-[150px] md:w-[350px] lazyload"
            src="/images/about-page/section-3d-blurred.jpg"
            data-src="/images/about-page/section-3d.jpg"
          />
          <h2 className="text-lg md:text-3xl text-center">Listen, Learn, Deliver Together</h2>
          <p className="text-sm md:text-base text-center">Farmers cannot navigate this transformative journey alone. At Excel Rasayan Export, we forge a collaborative alliance with farmers. We attentively listen to their needs, learn about their challenges, and deliver bespoke solutions. This partnership, built on trust and dedication, ensures a collective journey toward a sustainable and prosperous future for global agriculture.</p>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
