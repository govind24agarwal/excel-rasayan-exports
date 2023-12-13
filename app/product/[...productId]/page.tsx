import React from 'react'
import { productsData } from '@/data';
import { Badge } from "@/components/ui/badge"
import { Package, Ruler, Wheat } from 'lucide-react';

interface ProductsDetailsPageProps {
  params: {
    productId: Array<any>;
  };
};

const ProductDetailsPage: React.FC<ProductsDetailsPageProps> = ({
  params
}) => {
  const product = productsData.find(product => product.id === params.productId[0]);

  return (
    <main>
      <div className='grid grid-col-1 md:grid-cols-2 mx-auto max-w-6xl min-h-[90vh]'>
        <div className='flex flex-col justify-center mx-10 my-12'>
          <Badge className='uppercase text-base w-fit bg-green-800 text-white' variant="outline">{product?.categoryId}</Badge>
          <div className='ml-2'>
            <h2 className='text-4xl uppercase mt-8 text-green-700'>{product?.compnay}</h2>
            <p className='text-base capitalize mt-6'>Technical Name: {product?.chemical}</p>
            {product?.description && <p className='mt-6 text-neutral-600'>{product?.description}</p>}
          </div>
          <div className='mt-16 capitalize flex flex-col gap-5 ml-2'>
            <div className='flex gap-8'>
              <Wheat size={70} color='rgb(21 128 61'/>
              <p>Crop: {product?.crop}</p>
            </div>
            <div className='flex gap-8'>
              <Ruler size={45} color='rgb(21 128 61'/>
              <p>Dose: {product?.dose}</p>
            </div>
            <div className='flex gap-8'>
              <Package size={45} color='rgb(21 128 61'/>
              <p>Packing: {product?.packing}</p>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center max-w-[300px] mx-auto md:max-w-full mb-16'>
          <img
            src={product?.imageUrl}
            className='w-full h-auto'
          />
        </div>
      </div>
    </main>
  )
}

export default ProductDetailsPage
