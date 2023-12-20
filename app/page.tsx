import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="min-h-[90vh] bg-[url('/images/home-page/bg-1.png')] bg-no-repeat bg-cover relative flex flex-col">
        <h1 className='w-full text-center py-12 text-7xl text-white'>EXCEL RASAYAN EXPORT</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 flex-1'>
          <div className=''>
            <img
              src='/images/home-page/hero-1.png'
              className='absolute left-0 bottom-0 origin-bottom scale-75'
            />
          </div>
          <div className='flex flex-col mt-24 items-center col-span-2'>
            <p className='text-3xl text-white text-left mt-16 w-full'>Your Gateway to Global Agriculture Solutions.</p>
            <p className='text-lg text-white text-left mt-2 max-w-4xl mr-auto'>From insecticides that shield to herbicides that nurture, we export a spectrum of crop-enhancing products. Unleash the potential of your harvest with our premium chemicals.</p>
            <a href='/products' className='p-4 bg-white text-black rounded-full mt-12'>View Products</a>
          </div>
        </div>
      </div>
    </main>
  )
}
