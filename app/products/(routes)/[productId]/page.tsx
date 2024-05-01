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
    <Container className='mb-16'>
      <div className='h-28 md:h-52 flex justify-center items-center'>
        <h1 className='text-2xl md:text-5xl font-semibold uppercase'>{formatPageName(params.productId)}</h1>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-4 md:gap-x-8 mx-4 md:mx-8'>
        {
          productsData.filter(product => product.categoryId === params.productId).map(product => (
            <ProductCard key={product.id} data={product} />
          ))
        }
      </div>
    </Container>
  )
}

export default ProductsPage
