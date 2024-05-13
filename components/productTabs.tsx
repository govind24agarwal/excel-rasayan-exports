import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { productsData } from "@/data";
import ProductCard from "../app/products/(routes)/[productId]/components/productCard";
import Link from 'next/link';

const ProduuctTabs = () => {
  const featuredProducts = productsData.filter(product => product.isFeatured)

  return (
    <Tabs defaultValue="insecticides" className="">
      <div className='w-full flex items-center'>
        <TabsList className='mx-auto flex-wrap md:mb-2'>
          <div className='bg-[#4A4A4A] text-white p-1 md:p-2 md:pr-0 rounded-md md:rounded-none md:rounded-l-md'>
            <TabsTrigger value="insecticides">Insecticides</TabsTrigger>
            <TabsTrigger value="fungicides">Fungicides</TabsTrigger>
            <TabsTrigger value="herbicides">Herbicides</TabsTrigger>
          </div>
          <div className='bg-[#4A4A4A] text-white p-1 md:p-2 md:pl-0 rounded-md md:rounded-none md:rounded-r-md mt-1 md:mt-0'>
            <TabsTrigger value="plant-growth-regulators">Plant Growth Regulators</TabsTrigger>
          </div>
        </TabsList>
      </div>
      <TabsContent value="insecticides">
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4 xl:gap-x-8 mx-4 xl:mx-8'>
          {
            productsData.filter(product => product.categoryId === 'insecticides').slice(0,6).map(product => (
              <ProductCard key={product.id} data={product} />
            ))
          }
        </div>
        <div className='w-full flex justify-center items-center text-sm md:text-base mt-1 md:mt-2'>
          <Link href="/products/insecticides" className='bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-300 mt-2'>Show More</Link>
        </div>
      </TabsContent>
      <TabsContent value="fungicides">
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4 xl:gap-x-8 mx-4 xl:mx-8'>
          {
            productsData.filter(product => product.categoryId === 'fungicides').slice(0,6).map(product => (
              <ProductCard key={product.id} data={product} />
            ))
          }
        </div>
        <div className='w-full flex justify-center items-center text-sm md:text-base mt-1 md:mt-2'>
          <Link href="/products/fungicides" className='bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-300 mt-2'>Show More</Link>
        </div>
      </TabsContent>
      <TabsContent value="herbicides">
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4 xl:gap-x-8 mx-4 xl:mx-8'>
          {
            productsData.filter(product => product.categoryId === 'herbicides').slice(0,6).map(product => (
              <ProductCard key={product.id} data={product} />
            ))
          }
        </div>
        <div className='w-full flex justify-center items-center text-sm md:text-base mt-1 md:mt-2'>
          <Link href="/products/herbicides" className='bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-300 mt-2'>Show More</Link>
        </div>
      </TabsContent>
      <TabsContent value="plant-growth-regulators">
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-4 xl:gap-x-8 mx-4 xl:mx-8'>
          {
            productsData.filter(product => product.categoryId === 'plant-growth-regulators').slice(0,6).map(product => (
              <ProductCard key={product.id} data={product} />
            ))
          }
        </div>
        <div className='w-full flex justify-center items-center text-sm md:text-base mt-1 md:mt-2'>
          <Link href="/products/plant-growth-regulators" className='bg-orange-500 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-300 mt-2'>Show More</Link>
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default ProduuctTabs
