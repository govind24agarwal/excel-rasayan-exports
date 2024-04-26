import React from 'react'
import ProductTypeCard from './components/product-type-card'

const page = () => {
  return (
    <div className='relative bg-emerald-800/40 flex items-center p-4 md:py-16 min-h-[85vh] overflow-hidden'>
      <div className='relative mx-auto max-w-[100rem] px-2 md:px-12'>
        <h1 className='w-full text-center text-2xl md:text-3xl font-semibold mb-6 md:mb-16 -mt-6 md:-mt-16'>Our Products</h1>
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          <ProductTypeCard
            url='/products/insecticides'
            imageUrl='/images/products-categories/insecticides.jpeg'
            headingText='Insecticides'
            description='Insects damage crops and thus are responsible for huge losses to food production. Insecticides help in control of insects during crop growth and storage.'
          />
          <ProductTypeCard
            url='/products/herbicides'
            imageUrl='/images/products-categories/herbicides.jpeg'
            headingText='Herbicides'
            description='Insects damage crops and thus are responsible for huge losses to food production. Insecticides help in control of insects during crop growth and storage.'
          />
          <ProductTypeCard
            url='/products/fungicides'
            imageUrl='/images/products-categories/fungicides.jpeg'
            headingText='Fungicides'
            description='Insects damage crops and thus are responsible for huge losses to food production. Insecticides help in control of insects during crop growth and storage.'
          />
          <ProductTypeCard
            url='/products/plant-growth-regulators'
            imageUrl='/images/products-categories/plant-growth-regulators.jpeg'
            headingText='Plant Growth Regulators'
            description='Insects damage crops and thus are responsible for huge losses to food production. Insecticides help in control of insects during crop growth and storage.'
          />
        </div>
      </div>
      <img src='/images/watermarks/cows_front.png' className='z-10 h-36 md:h-44 opacity-40 absolute rounded-md bottom-0 translate-y-6 md:translate-y-8 -right-4 md:right-4'/>
      <img src='/images/watermarks/man.png' className='h-32 md:h-[230px] opacity-40 absolute rounded-md bottom-0 left-0 -translate-x-8 translate-y-3'/>
      <img src='/images/watermarks/wheat2.png' className='h-16 md:h-44 opacity-40 absolute rounded-md bottom-0 translate-y-1 md:translate-y-4 left-14 md:left-28'/>
      <div className='z-10 absolute w-44 h-44 rounded-md -top-24 right-1/4 bg-white/30'></div>
    </div>
  )
}

export default page
