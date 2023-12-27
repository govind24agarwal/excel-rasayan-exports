import ContactForm from "@/components/contact-form"
import CopyButton from "@/components/ui/copy-button"
import {
  Globe2,
  Microscope,
  Sprout,
  Truck,
  UserPlus2,
  Bug,
  Flower2,
  SprayCan,
  MapPin,
  Phone,
  Mail,
  PhoneCall
 } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const whatsappSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={22}
      height={22}
      viewBox="0 0 58 58"
    >
      <path
        d="m0 58 4.988-14.963A28.35 28.35 0 0 1 1 28.5C1 12.76 13.76 0 29.5 0S58 12.76 58 28.5 45.24 57 29.5 57a28.373 28.373 0 0 1-13.26-3.273L0 58z"
        style={{
          fill: "#2cb742",
        }}
      />
      <path
        d="M47.683 37.985c-1.316-2.487-6.169-5.331-6.169-5.331-1.098-.626-2.423-.696-3.049.42 0 0-1.577 1.891-1.978 2.163-1.832 1.241-3.529 1.193-5.242-.52l-3.981-3.981-3.981-3.981c-1.713-1.713-1.761-3.41-.52-5.242.272-.401 2.163-1.978 2.163-1.978 1.116-.627 1.046-1.951.42-3.049 0 0-2.844-4.853-5.331-6.169a2.726 2.726 0 0 0-3.203.482l-1.758 1.758c-5.577 5.577-2.831 11.873 2.746 17.45l5.097 5.097 5.097 5.097c5.577 5.577 11.873 8.323 17.45 2.746l1.758-1.758a2.728 2.728 0 0 0 .481-3.204z"
        style={{
          fill: "#fff",
        }}
      />
    </svg>
  )
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
      <div className="flex flex-col w-full items-center my-12 lg:mb-20 lg:mt-12">
        <h2 className="text-5xl lg:text-5xl mx-auto">Our Focus</h2>
        <div className="mb-6 lg:mb-12 mt-1 w-44 lg:w-44 h-1 rounded-xl bg-stone-600"></div>
        <div className="flex overflow-y-auto items-center gap-4 justify-between w-full px-8">
          <div className="min-w-[230px] w-[300px] aspect-square rounded-lg shadow-lg p-8 border flex flex-col gap-y-6 items-center justify-center mb-2">
            <Sprout size={60} className="text-stone-600"/>
            <p className="text-lg text-center">Product Quality Assurance</p>
          </div>
          <div className="min-w-[230px] w-[300px] aspect-square rounded-lg shadow-lg p-8 border flex flex-col gap-y-6 items-center justify-center mb-2">
            <Globe2 size={60} className="text-stone-600"/>
            <p className="text-lg text-center">Global Regulatory Compliance</p>
          </div>
          <div className="min-w-[230px] w-[300px] aspect-square rounded-lg shadow-lg p-8 border flex flex-col gap-y-6 items-center justify-center mb-2">
            <Microscope size={60} className="text-stone-600"/>
            <p className="text-lg text-center">Innovation and Research</p>
          </div>
          <div className="min-w-[230px] w-[300px] aspect-square rounded-lg shadow-lg p-8 border flex flex-col gap-y-6 items-center justify-center mb-2">
            <Truck size={60} className="text-stone-600"/>
            <p className="text-lg text-center">Reliable Supply Chain</p>
          </div>
          <div className="min-w-[230px] w-[300px] aspect-square rounded-lg shadow-lg p-8 border flex flex-col gap-y-6 items-center justify-center mb-2">
            <UserPlus2 size={60} className="text-stone-600"/>
            <p className="text-lg text-center">Customer Support and Education</p>
          </div>
        </div>
      </div>
      {/* Our Products */}
      <div className="flex flex-col items-center py-12 lg:py-16 bg-[url('/images/home-page/bg-2.png')] bg-no-repeat bg-cover lg:mt-2 m-1">
        <h2 className="text-3xl lg:text-5xl ml-12 mb-2 mr-auto text-white font-semibold">Our Products</h2>
        <p className="ml-12 mb-8 mr-auto text-white">Discover our solutions to simplify your farming</p>
        {/* <div className="mb-6 lg:mb-12 mt-1 w-44 lg:w-60 h-1 rounded-xl bg-stone-600"></div> */}
        <div className="flex flex-col lg:flex-row items-center gap-4 justify-center w-full px-8">
          <div className="bg-white w-[350px] lg:w-[300px] lg:h-[520px] rounded-lg shadow-lg p-4 border flex flex-row lg:flex-col gap-y-2 items-center lg:items-start justify-start mb-2">
            <div className="flex flex-col justify-center items-center lg:items-start lg:h-auto">
              <Bug size={40} className="text-stone-600"/>
              <h3 className="text-xl text-stone-600 uppercase">Insecticides</h3>
            </div>
            <img className="ml-8 lg:ml-0 w-[150px] lg:w-auto" src="/images/home-page/Fungicide.webp"/>
          </div>
          <div className="bg-white w-[350px] lg:w-[300px] lg:h-[520px] rounded-lg shadow-lg p-4 border flex flex-row lg:flex-col gap-y-2 items-center lg:items-start justify-start mb-2">
            <div className="flex flex-col justify-center items-center lg:items-start lg:h-auto">
              <Flower2 size={40} className="text-stone-600"/>
              <h3 className="text-xl text-stone-600 uppercase">Herbicides</h3>
            </div>
            <img className="ml-8 lg:ml-0 w-[150px] lg:w-auto" src="/images/home-page/Fungicide.webp"/>
          </div>
          <div className="bg-white w-[350px] lg:w-[300px] lg:h-[520px] rounded-lg shadow-lg p-4 border flex flex-row lg:flex-col gap-y-2 items-center lg:items-start justify-start mb-2">
            <div className="flex flex-col justify-center items-center lg:items-start lg:h-auto">
              <SprayCan size={40} className="text-stone-600 -scale-x-100"/>
              <h3 className="text-xl text-stone-600 uppercase">Fungicides</h3>
            </div>
            <img className="ml-8 lg:ml-0 w-[150px] lg:w-auto" src="/images/home-page/Fungicide.webp"/>
          </div>
          <div className="bg-white w-[350px] lg:w-[300px] lg:h-[520px] rounded-lg shadow-lg p-4 border flex flex-row lg:flex-col gap-y-2 items-center lg:items-start justify-start mb-2">
            <div className="flex flex-col justify-center items-center lg:items-start lg:h-auto">
              <Sprout size={40} className="text-stone-600"/>
              <h3 className="text-xl text-stone-600 uppercase text-center lg:text-left">Plant Growth Regulator</h3>
            </div>
            <img className="ml-8 lg:ml-0 w-[150px] lg:w-auto" src="/images/home-page/Fungicide.webp"/>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 border mx-1 rounded-sm shadow-lg">
        <div className="mx-12 py-12">
          <h2 className="text-3xl mb-4">Write to us</h2>
          <ContactForm />
        </div>
        <div className="bg-[#837f7757] px-10 py-12">
          <div className="mb-6">
            <h2 className="text-xl mb-1 font-semibold">Contact Information</h2>
            <p className="text-stone-600">Contact us for any buyer related queries</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row items-start gap-2">
              <div className="flex gap-2 items-center">
                <Phone size={20} className="text-stone-600"/>
                <p className="text-stone-600">
                  Phone Numbers:
                </p>
              </div>
              <div className="flex flex-col gap-2 ml-6 lg:ml-0">
                <div className="flex gap-2 items-center px-1">
                  <p className="border-b border-stone-600/20">9897773475</p>
                  <CopyButton text="9897773475"/>
                </div>
                <div className="flex gap-2 items-center px-1">
                  <p className="border-b border-stone-600/20">8126069112</p>
                  <CopyButton text="8126069112"/>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start gap-2 mb-1 lg:mb-0">
              <div className="flex gap-2 items-center">
                <Mail size={20} className="text-stone-600"/>
                <p className="text-stone-600">
                  Email Addresses:
                </p>
              </div>
              <div className="flex flex-col gap-2 ml-6 lg:ml-0">
                <div className="flex gap-2 items-center px-1">
                  <p className="border-b border-stone-600/20">excelrasayanexport@gmail.com</p>
                  <CopyButton text="excelrasayanexport@gmail.com"/>
                </div>
                <div className="flex gap-2 items-center px-1">
                  <p className="border-b border-stone-600/20">exportexcelrasayan@gmail.com</p>
                  <CopyButton text="exportexcelrasayan@gmail.com"/>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <MapPin size={20} className="text-stone-600"/>
              <p><span className="text-stone-600">Office Address: </span>1028, fhowufh</p>
            </div>
            <div className="flex gap-2 items-center">
              <MapPin size={20} className="text-stone-600"/>
              <p><span className="text-stone-600">Factory Address: </span>1028, fhowufh</p>
            </div>
            <Link
              href="https://wa.me/8126069112?text=Hello"
              target="_blank"
              className="flex items-center gap-2 border mr-auto p-4 mt-4 bg-white rounded-xl font-semibold shadow-md"
            >
              {/* <Phone size={20} className="text-stone-600"/> */}
              {whatsappSvg}
              <p className="text-stone-600/80">
                Chat on whatsapp
              </p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
