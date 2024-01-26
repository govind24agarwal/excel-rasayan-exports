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

  if(['insecticides','herbicides','fungicides','plant-growth-regulators'].indexOf(params.productId) < 0){
    redirect('/products')
  }

  return (
    <Container className='mb-16'>
      <div className='h-40 md:h-52 flex justify-center items-center'>
        <h1 className='text-4xl md:text-5xl font-semibold uppercase'>{params.productId}</h1>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-8 mx-8'>
        {
          productsData.filter(product => product.categoryId === params.productId).map(product => (
            <ProductCard data={product} />
          ))
        }
      </div>
    </Container>
  )
}

export default ProductsPage
