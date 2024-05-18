"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'

const Banner = () => {
  const [loaded, setLoaded] = useState([false, false, false, false]);
  const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  const handleImageLoad = (index: number) => {
    console.log('hereee', index)
    const newLoaded = [...loaded];
    newLoaded[index] = true;
    setLoaded(newLoaded);
    console.log(loaded)
  };

  // if (!isClient) {
  //   return null; // Return null during server-side rendering
  // }

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      plugins={[Autoplay({ delay: 3000, playOnInit: true, stopOnInteraction: false, stopOnFocusIn: false })]}
      className=''
    >
      <CarouselContent>
        <CarouselItem className='md:min-h-[80vh] md:max-h-[80vh] max-w-[100vw] flex relative text-white'>
          <div className='w-full h-full'>
            {!loaded[0] && (
              <Image 
                src="/images/home-page/bg-1b_blurred.jpg" 
                alt="Blurred Banner 1"
                layout="fill"
                objectFit="cover"
                className='w-full h-full object-cover'
              />
            )}
            <Image 
              src="/images/home-page/bg-1b.jpg" 
              alt="Banner 1"
              layout="fill"
              objectFit="cover"
              className={`w-full h-full object-cover ${loaded[1] ? 'opacity-100' : 'opacity-0'}`}
              onLoadingComplete={() => handleImageLoad(0)}
            />
          </div>
          <div className='absolute top-[5%] md:top-[10%] left-[50%] -translate-x-[50%] flex flex-col gap-2 md:gap-4 items-center bg-black/50 p-4 rounded-md'>
            <h1 className='text-center text-xl text-nowrap md:text-7xl'>EXCEL RASAYAN EXPORT</h1>
            <p className='text-sm lg:text-3xl text-center'>Your Gateway to Global Agriculture Solutions.</p>
            <Link href='/products' className='p-1 px-2 md:p-4 bg-white rounded-full text-nowrap text-base md:text-xl mt-12 text-black'>View Products</Link>
          </div>
        </CarouselItem>
        <CarouselItem className='md:min-h-[80vh] md:max-h-[80vh] max-w-[100vw] flex relative text-black'>
          <div className='w-full h-full relative'>
            {!loaded[1] && (
              <Image 
                src="/images/home-page/bg-1c_blurred.jpg" 
                alt="Blurred Banner 2"
                layout="fill"
                objectFit="cover"
                className='w-full h-full object-cover'
              />
            )}
            <Image 
              src="/images/home-page/bg-1c.jpg" 
              alt="Banner 2"
              layout="fill"
              objectFit="cover"
              className={`w-full h-full object-cover ${loaded[1] ? 'opacity-100' : 'opacity-0'}`}
              onLoadingComplete={() => handleImageLoad(1)}
            />
          </div>
          <div className='absolute top-[5%] md:top-[10%] left-[50%] -translate-x-[50%] flex flex-col gap-2 md:gap-4 items-center bg-white/50 p-4 rounded-md'>
            <h1 className='text-center text-xl text-nowrap md:text-7xl'>EXCEL RASAYAN EXPORT</h1>
            <p className='text-sm lg:text-3xl text-center'>Your Gateway to Global Agriculture Solutions.</p>
            <Link href='/products' className='p-1 px-2 md:p-4 bg-black rounded-full text-nowrap text-base md:text-xl mt-12 text-white'>View Products</Link>
          </div>
        </CarouselItem>
        <CarouselItem className='md:min-h-[80vh] md:max-h-[80vh] max-w-[100vw] flex relative text-white'>
          <div className='w-full h-full relative'>
            {!loaded[2] && (
              <Image 
                src="/images/home-page/bg-1d_blurred.jpg" 
                alt="Blurred Banner 3"
                layout="fill"
                objectFit="cover"
                className='w-full h-full object-cover'
              />
            )}
            <Image 
              src="/images/home-page/bg-1d.jpg" 
              alt="Banner 3"
              layout="fill"
              objectFit="cover"
              className={`w-full h-full object-cover ${loaded[2] ? 'opacity-100' : 'opacity-0'}`}
              onLoadingComplete={() => handleImageLoad(2)}
            />
          </div>
          <div className='absolute top-[5%] md:top-[10%] left-[50%] -translate-x-[50%] flex flex-col gap-2 md:gap-4 items-center bg-black/50 p-4 rounded-md'>
            <h1 className='text-center text-xl text-nowrap md:text-7xl'>EXCEL RASAYAN EXPORT</h1>
            <p className='text-sm lg:text-3xl text-center'>Your Gateway to Global Agriculture Solutions.</p>
            <Link href='/products' className='p-1 px-2 md:p-4 bg-black rounded-full text-nowrap text-base md:text-xl mt-12 text-white'>View Products</Link>
          </div>
        </CarouselItem>
        <CarouselItem className='md:min-h-[80vh] md:max-h-[80vh] max-w-[100vw] flex relative text-black'>
          <div className='w-full h-full relative'>
            {!loaded[3] && (
              <Image 
                src="/images/home-page/bg-1e_blurred.jpg" 
                alt="Blurred Banner 4"
                layout="fill"
                objectFit="cover"
                className='w-full h-full object-cover'
              />
            )}
            <Image 
              src="/images/home-page/bg-1e.jpg" 
              alt="Banner 4"
              layout="fill"
              objectFit="cover"
              className={`w-full h-full object-cover ${loaded[3] ? 'opacity-100' : 'opacity-0'}`}
              onLoadingComplete={() => handleImageLoad(3)}
            />
          </div>
          <div className='absolute top-[5%] md:top-[10%] left-[50%] -translate-x-[50%] flex flex-col gap-2 md:gap-4 items-center bg-white/50 p-4 rounded-md'>
            <h1 className='text-center text-xl text-nowrap md:text-7xl'>EXCEL RASAYAN EXPORT</h1>
            <p className='text-sm lg:text-3xl text-center'>Your Gateway to Global Agriculture Solutions.</p>
            <Link href='/products' className='p-1 px-2 md:p-4 bg-black rounded-full text-nowrap text-base md:text-xl mt-12 text-white'>View Products</Link>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}

export default Banner
