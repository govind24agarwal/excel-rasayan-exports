import React from 'react'
import { productsData } from '@/data';
import { Badge } from "@/components/ui/badge"
import { Package, Ruler, Wheat } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


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
      <div className='bg-slate-100 py-6'>
        <div className='grid grid-col-1 md:grid-cols-2 mx-auto max-w-6xl min-h-[60vh] bg-slate-100'>
          <div className='flex items-center justify-center max-w-[300px] mx-auto md:max-w-full'>
            <img
              src={product?.imageUrl}
              className='w-full h-auto'
            />
          </div>
          <div className='flex flex-col justify-center mx-10 my-12'>
            <Badge className='uppercase text-base w-fit bg-green-800 text-white' variant="outline">{product?.categoryId}</Badge>
            <div className='ml-2'>
              <h2 className='text-4xl uppercase mt-8 text-green-700'>{product?.compnay}</h2>
              <p className='text-base capitalize mt-6'>Technical Name: {product?.chemical}</p>
              {product?.description && <p className='mt-6 text-neutral-600'>{product?.description}</p>}
            </div>
            <div className='mt-16 capitalize flex flex-col gap-5 ml-2'>
              {/* <div className='flex gap-8'>
                <Wheat size={70} color='rgb(21 128 61'/>
                <p>Crop: {product?.crop}</p>
              </div>
              <div className='flex gap-8'>
                <Ruler size={45} color='rgb(21 128 61'/>
                <p>Dose: {product?.dose}</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-5xl text-left px-4'>
        <div className='flex flex-col gap-2 mt-12'>
          <div className='flex gap-2'>
            <Package size={25} color='rgb(21 128 61'/>
            <p className='text-lg'>Pack Size</p>
          </div>
          <p className='ml-2'>{product?.packing}</p>
        </div>
        <table className='hidden md:block w-full my-12 border-2'>
          <thead>
            <tr className='bg-green-700'>
              <th className='py-2 text-white pl-1 min-w-[150px]'>Crops</th>
              <th className='py-2 text-white pl-1'>Target Pest/ Disease</th>
              <th className='py-2 text-white pl-1 min-w-[150px]'>Dose</th>
            </tr>
          </thead>
          <tbody>
              {product?.crop.map( crop => {
                return (
                  <tr key={crop.crop}>
                    <td className='py-2 pl-1 capitalize pr-2'>{crop.crop}</td>
                    <td className='py-2 pl-1 capitalize pr-2'>{crop.target}</td>
                    <td className='py-2 pl-1 capitalize pr-2'>{crop.dose}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
        <div className='block md:hidden px-1 my-4 border-t pt-4'>
          <div className='flex gap-2'>
            <Wheat size={25} color='rgb(21 128 61'/>
            <p className='text-lg'>Crops</p>
          </div>          {
            product?.crop.map( crop => {
              return (
                <Accordion key={crop.crop} type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className='text-green-800 justify-between'>{crop.crop}</AccordionTrigger>
                    <AccordionContent className='py-0 pb-0'>
                      <div className='ml-2 border-b pb-1'>
                        <p className='text-base'>Target Pest/ Disease</p>
                        <p className='text-sm text-stone-600'>{crop.target}</p>
                      </div>
                      <div className='ml-2'>
                        <p className='text-base'>Dose</p>
                        <p className='text-sm text-stone-600'>{crop.dose}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )
            })
          }
        </div>
      </div>
    </main>
  )
}

export default ProductDetailsPage
