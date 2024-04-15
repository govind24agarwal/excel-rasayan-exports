import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ProductTypeCard {
  url: string,
  imageUrl: string,
  headingText: string,
  description: string,
}

const ProductTypeCard: React.FC<ProductTypeCard> = ({
  url,
  imageUrl,
  headingText,
  description
}) => {
  return (
    <Link href={url} className='border p-2 md:p-4 flex flex-col justify-center items-center py-3 md:pt-8 shadow-lg'>
      <Image
        src={imageUrl}
        alt={headingText}
        className='object-cover mb-8 rounded-md'
        width={300}
        height={300}
      />
      <h2 className='text-sm md:text-lg font-semibold uppercase border-b border-teal-600 md:mb-6 text-center'>{headingText}</h2>
      <p className='hidden md:block text-base text-center text-neutral-600 dark:text-neutral-400'>{description}</p>
    </Link>
  )
}

export default ProductTypeCard
