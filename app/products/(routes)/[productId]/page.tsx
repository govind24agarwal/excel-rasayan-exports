import React from 'react'
import { redirect } from "next/navigation";

import Container from '@/components/ui/container';
import { productsData } from "@/data";
import ProductCard from './components/productCard';

interface ProductsPageProps {
  params: {
    productId: string;
  };
};

const ProductsPage: React.FC<ProductsPageProps> = ({
  params
}) => {

  const formatPageName = (text: String) =>{
    const replacedText = text.replaceAll('-',' ')
    return replacedText;
  }

  if(['insecticides','herbicides','fungicides','plant-growth-regulators'].indexOf(params.productId) < 0){
    redirect('/products')
  }

  return (
    <div>
      <div className="h-28 md:h-52 flex flex-col items-center justify-center text-center mb-8 relative">
          <h1 className="text-4xl font-bold text-gray-800 uppercase z-10">{formatPageName(params.productId)}</h1>
          <p className="text-gray-600 mt-2 z-10">Explore our range of {formatPageName(params.productId)} to protect your crops</p>
          <div className="absolute inset-0 opacity-50">
              <img src="/images/products-categories/banner.webp" alt="Background Image" className="w-full h-full object-cover" />
          </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-6 gap-y-6 gap-x-4 md:gap-x-8 mx-4 md:mx-8'>
        {
          productsData.filter(product => product.categoryId === params.productId).map(product => (
            <ProductCard key={product.id} data={product} />
          ))
        }
      </div>
    </div>
  )
}

export default ProductsPage
