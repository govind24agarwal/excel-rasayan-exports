import { Globe2, ListChecks, Microscope, Sprout, Truck, UserRoundCheck, UsersRound, UserPlus2, Rabbit, Snail, Bug, Flower2, SprayCan } from "lucide-react"

export default function Home() {
  return (
    <main>
      {/* Banner / Hero Section */}
      <div className="min-h-[90vh] bg-[url('/images/home-page/bg-1.png')] bg-no-repeat bg-cover relative flex flex-col">
        <h1 className='w-full text-center pt-12 pb-4 lg:py-12 text-5xl lg:text-7xl text-white'>EXCEL RASAYAN EXPORT</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 flex-1'>
          <div className='flex flex-col lg:mt-24 items-center lg:col-start-2 lg:col-span-2'>
            <p className='text-2xl lg:text-3xl text-white text-center lg:text-left mt-8 lg:mt-16 w-full'>Your Gateway to Global Agriculture Solutions.</p>
            <p className='lg:text-lg text-white text-center lg:text-left mt-4 lg:mt-2 max-w-4xl mx-2 lg:mr-auto'>From insecticides that shield to herbicides that nurture, we export a spectrum of crop-enhancing products. Unleash the potential of your harvest with our premium chemicals.</p>
            <a href='/products' className='p-4 bg-white text-black rounded-full mt-6 lg:mt-12'>View Products</a>
          </div>
          <div className=''>
            <img
              src='/images/home-page/hero-1.png'
              className='absolute left-0 bottom-0 origin-bottom scale-75'
            />
          </div>
        </div>
      </div>
      {/* qualities */}
      <div className="flex flex-col w-full items-center my-12 lg:my-24">
        <h2 className="text-5xl lg:text-7xl mx-auto">Our Focus</h2>
        <div className="mb-6 lg:mb-12 mt-1 w-44 lg:w-60 h-1 rounded-xl bg-emerald-700"></div>
        <div className="flex overflow-y-auto items-center gap-4 justify-between w-full px-8">
          <div className="min-w-[230px] w-[300px] aspect-square rounded-lg shadow-lg p-8 border flex flex-col gap-y-6 items-center justify-center mb-2">
            <Sprout size={60} className="text-emerald-900"/>
            <p className="text-lg text-center">Product Quality Assurance</p>
          </div>
          <div className="min-w-[230px] w-[300px] aspect-square rounded-lg shadow-lg p-8 border flex flex-col gap-y-6 items-center justify-center mb-2">
            <Globe2 size={60} className="text-emerald-900"/>
            <p className="text-lg text-center">Global Regulatory Compliance</p>
          </div>
          <div className="min-w-[230px] w-[300px] aspect-square rounded-lg shadow-lg p-8 border flex flex-col gap-y-6 items-center justify-center mb-2">
            <Microscope size={60} className="text-emerald-900"/>
            <p className="text-lg text-center">Innovation and Research</p>
          </div>
          <div className="min-w-[230px] w-[300px] aspect-square rounded-lg shadow-lg p-8 border flex flex-col gap-y-6 items-center justify-center mb-2">
            <Truck size={60} className="text-emerald-900"/>
            <p className="text-lg text-center">Reliable Supply Chain</p>
          </div>
          <div className="min-w-[230px] w-[300px] aspect-square rounded-lg shadow-lg p-8 border flex flex-col gap-y-6 items-center justify-center mb-2">
            <UserPlus2 size={60} className="text-emerald-900"/>
            <p className="text-lg text-center">Customer Support and Education</p>
          </div>
        </div>
      </div>
      {/* Our Products */}
      <div className="flex flex-col items-center py-12 lg:py-16 bg-[url('/images/home-page/bg-2.png')] bg-no-repeat bg-cover lg:mt-2 m-1">
        <h2 className="text-3xl lg:text-5xl ml-12 mb-2 mr-auto text-white font-semibold">Our Products</h2>
        <p className="ml-12 mb-8 mr-auto text-white">Discover our solutions to simplify your farming</p>
        {/* <div className="mb-6 lg:mb-12 mt-1 w-44 lg:w-60 h-1 rounded-xl bg-emerald-700"></div> */}
        <div className="flex flex-col lg:flex-row items-center gap-4 justify-center w-full px-8">
          <div className="bg-white w-[350px] lg:w-[300px] lg:h-[520px] rounded-lg shadow-lg p-4 border flex flex-row lg:flex-col gap-y-2 items-center lg:items-start justify-start mb-2">
            <div className="flex flex-col justify-center items-center lg:items-start lg:h-auto">
              <Bug size={40} className="text-emerald-900"/>
              <h3 className="text-xl text-emerald-900 uppercase">Insecticides</h3>
            </div>
            <img className="ml-8 lg:ml-0 w-[150px] lg:w-auto" src="/images/home-page/Fungicide.webp"/>
          </div>
          <div className="bg-white w-[350px] lg:w-[300px] lg:h-[520px] rounded-lg shadow-lg p-4 border flex flex-row lg:flex-col gap-y-2 items-center lg:items-start justify-start mb-2">
            <div className="flex flex-col justify-center items-center lg:items-start lg:h-auto">
              <Flower2 size={40} className="text-emerald-900"/>
              <h3 className="text-xl text-emerald-900 uppercase">Herbicides</h3>
            </div>
            <img className="ml-8 lg:ml-0 w-[150px] lg:w-auto" src="/images/home-page/Fungicide.webp"/>
          </div>
          <div className="bg-white w-[350px] lg:w-[300px] lg:h-[520px] rounded-lg shadow-lg p-4 border flex flex-row lg:flex-col gap-y-2 items-center lg:items-start justify-start mb-2">
            <div className="flex flex-col justify-center items-center lg:items-start lg:h-auto">
              <SprayCan size={40} className="text-emerald-900 -scale-x-100"/>
              <h3 className="text-xl text-emerald-900 uppercase">Fungicides</h3>
            </div>
            <img className="ml-8 lg:ml-0 w-[150px] lg:w-auto" src="/images/home-page/Fungicide.webp"/>
          </div>
          <div className="bg-white w-[350px] lg:w-[300px] lg:h-[520px] rounded-lg shadow-lg p-4 border flex flex-row lg:flex-col gap-y-2 items-center lg:items-start justify-start mb-2">
            <div className="flex flex-col justify-center items-center lg:items-start lg:h-auto">
              <Sprout size={40} className="text-emerald-900"/>
              <h3 className="text-xl text-emerald-900 uppercase text-center lg:text-left">Plant Growth Regulator</h3>
            </div>
            <img className="ml-8 lg:ml-0 w-[150px] lg:w-auto" src="/images/home-page/Fungicide.webp"/>
          </div>
        </div>
      </div>
    </main>
  )
}
