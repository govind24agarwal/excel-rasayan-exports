"use client"

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'


const Banner = () => {
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      plugins={[Autoplay({ delay: 3000, playOnInit: true, stopOnInteraction: false,stopOnFocusIn: false,  })]}
      className=''
    >
      <CarouselContent>
        <CarouselItem className='md:h-min-h-[80vh] md:max-h-[80vh] max-w-[100vw] flex relative text-black'>
          <img src="/images/home-page/bg-1a.png" className='w-full object-cover' />
          <div className='absolute top-[5%] md:top-[10%] left-[50%] -translate-x-[50%] flex flex-col gap-2 md:gap-4 items-center'>
            <h1 className='text-center text-xl text-nowrap md:text-7xl'>EXCEL RASAYAN EXPORT</h1>
            <p className='text-sm lg:text-3xl text-center'>Your Gateway to Global Agriculture Solutions.</p>
            <Link href='/products' className='p-1 px-2 md:p-4 bg-white rounded-full w-min text-nowrap text-base md:text-xl mt-12'>View Products</Link>
          </div>
        </CarouselItem>
        <CarouselItem className='md:h-min-h-[80vh] md:max-h-[80vh] max-w-[100vw] flex relative text-white'>
          <img src="/images/home-page/bg-1b.jpg" className='w-full object-cover' />
          <div className='absolute top-[5%] md:top-[10%] left-[50%] -translate-x-[50%] flex flex-col gap-2 md:gap-4 items-center'>
            <h1 className='text-center text-xl text-nowrap md:text-7xl'>EXCEL RASAYAN EXPORT</h1>
            <p className='text-sm lg:text-3xl text-center'>Your Gateway to Global Agriculture Solutions.</p>
            <Link href='/products' className='p-1 px-2 md:p-4 bg-white rounded-full w-min text-nowrap text-base md:text-xl mt-12 text-black'>View Products</Link>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>

  )
}

export default Banner
