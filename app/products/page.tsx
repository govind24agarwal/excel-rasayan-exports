import React from 'react'
import ProductTypeCard from './components/product-type-card'

const page = () => {
  return (
    <div className='bg-emerald-800/40 flex items-center p-4 md:py-16 min-h-[85vh]'>
      <div className='mx-auto max-w-[100rem] px-2 md:px-12'>
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
      <div className='absolute w-44 h-44 rounded-md -bottom-12 left-1/2 bg-white/30'></div>
    </div>
  )
}

export default page
