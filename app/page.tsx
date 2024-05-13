import ContactForm from "@/components/contact-form"
import CopyButton from "@/components/ui/copy-button"
import {
  Globe2,
  Microscope,
  Sprout,
  Truck,
  UserPlus2,
  MapPin,
  Phone,
  Mail,
 } from "lucide-react"
import Link from "next/link"
import { productsData } from "@/data";
import ProductCard from "./products/(routes)/[productId]/components/productCard";
import Banner from "@/components/banner";
import ProduuctTabs from "@/components/productTabs";

export default function Home() {
  const featuredProducts = productsData.filter(product => product.isFeatured)

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
      <div className="md:min-h-[80vh] md:max-h-[80vh] max-w-[100vw] bg-white">
        <Banner />
      </div>
      {/* qualities */}
      <div className="flex flex-col w-full items-center my-12 lg:mb-20 lg:mt-12">
        <h2 className="text-3xl md:text-5xl mx-auto">Our Focus</h2>
        <div className="mb-6 lg:mb-12 mt-1 w-32 md:w-44 h-1 rounded-xl bg-stone-600"></div>
        <div className="flex overflow-y-auto items-stretch gap-4 justify-between w-full px-8">
          <div className="min-w-[45%] md:min-w-[18%] md:w-[300px] aspect-square rounded-lg bg-white dark:bg-slate-300 shadow-lg p-8 border flex flex-col gap-y-6 items-center justify-center mb-2">
            <Sprout size={60} className="text-stone-600"/>
            <p className="text-sm md:text-lg text-center dark:text-stone-600">Product Quality Assurance</p>
          </div>
          <div className="min-w-[45%] md:min-w-[18%] md:w-[300px] aspect-square rounded-lg bg-white dark:bg-slate-300 shadow-lg p-8 border flex flex-col gap-y-6 items-center justify-center mb-2">
            <Globe2 size={60} className="text-stone-600"/>
            <p className="text-sm md:text-lg text-center dark:text-stone-600">Global Regulatory Compliance</p>
          </div>
          <div className="min-w-[45%] md:min-w-[18%] md:w-[300px] aspect-square rounded-lg bg-white dark:bg-slate-300 shadow-lg p-8 border flex flex-col gap-y-6 items-center justify-center mb-2">
            <Microscope size={60} className="text-stone-600"/>
            <p className="text-sm md:text-lg text-center dark:text-stone-600">Innovation and Research</p>
          </div>
          <div className="min-w-[45%] md:min-w-[18%] md:w-[300px] aspect-square rounded-lg bg-white dark:bg-slate-300 shadow-lg p-8 border flex flex-col gap-y-6 items-center justify-center mb-2">
            <Truck size={60} className="text-stone-600"/>
            <p className="text-sm md:text-lg text-center dark:text-stone-600">Reliable Supply Chain</p>
          </div>
          <div className="min-w-[45%] md:min-w-[18%] md:w-[300px] aspect-square rounded-lg bg-white dark:bg-slate-300 shadow-lg p-8 border flex flex-col gap-y-6 items-center justify-center mb-2">
            <UserPlus2 size={60} className="text-stone-600"/>
            <p className="text-sm md:text-lg text-center dark:text-stone-600">Customer Support and Education</p>
          </div>
        </div>
      </div>
      {/* Our Products */}
      <div className="px-4 lg:px-8 py-8 lg:py-12 flex flex-col items-center bg-[#A8BDA5] bg-no-repeat bg-cover lg:mt-2 m-1">
        <div className="w-full p-4 shadow-lg bg-white rounded-lg">
          <h2 className="text-3xl lg:pl-0 md:text-5xl mb-2 mr-auto text-stone-900 font-semibold">Our Products</h2>
          <p className="mb-8 lg:pl-0 mr-auto text-stone-900">Discover our solutions to simplify your farming</p>
          {/* <div className="mb-6 lg:mb-12 mt-1 w-44 lg:w-60 h-1 rounded-xl bg-stone-600"></div> */}
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-center w-full md:px-8">
            <ProduuctTabs />
          </div>
        </div>
      </div>
      {/* Featured Products */}
      <div className="py-12 border mx-1 shadow-sm my-1">
        <h2 className="text-3xl mb-8 text-center">Featured Products</h2>
        <div className='flex gap-y-6 gap-x-8 lg:mx-8 mx-4 overflow-y-auto'>
          {featuredProducts.map(product => (
            <ProductCard key={product.id} className="lg:min-w-[15%] min-w-[55%] mb-2" data={product}/>
          ))}
        </div>
      </div>
      {/* Contact us */}
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
