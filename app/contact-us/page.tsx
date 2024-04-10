import React from 'react'
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
 } from "lucide-react"
import Link from "next/link"


const page = () => {

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
    <main className='bg-slate-100 min-h-[85vh] flex items-start justify-center relative overflow-hidden'>
      <div className='w-full flex justify-center items-center p-4 text-4xl max-w-6xl flex-col'>
        <h1>How would you like to contact us?</h1>
        <div className='flex w-full mt-12 gap-8'>
          <div className='w-[50%] text-base bg-white px-6 py-10'>
            <h2 className='text-2xl'>Request a call.</h2>
            <p className='text-[#969696] mb-4'>Give us your information and we will call you back.</p>
            <ContactForm />
          </div>

          <div className='w-[50%] text-base bg-white px-6 py-10'>
            <div className="mb-6">
              <h2 className="text-xl mb-1 font-semibold">Contact Information</h2>
              <p className="text-stone-600">Contact us for any buyer related queries</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col lg:flex-row items-start gap-2">
                <div className="flex gap-2 items-center mb-2">
                  <Phone size={20} className="text-stone-600"/>
                  <p className="text-stone-600">
                    Phone Numbers:
                  </p>
                </div>
                <div className="flex flex-col gap-2 ml-6 lg:ml-0">
                  <div className="flex gap-2 items-center mb-2 px-1">
                    <p className="border-b border-stone-600/20">9897773475</p>
                    <CopyButton text="9897773475"/>
                  </div>
                  <div className="flex gap-2 items-center mb-2 px-1">
                    <p className="border-b border-stone-600/20">8126069112</p>
                    <CopyButton text="8126069112"/>
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-start gap-2 mb-1 lg:mb-0">
                <div className="flex gap-2 items-center mb-2">
                  <Mail size={20} className="text-stone-600"/>
                  <p className="text-stone-600">
                    Email Addresses:
                  </p>
                </div>
                <div className="flex flex-col gap-2 ml-6 lg:ml-0">
                  <div className="flex gap-2 items-center mb-2 px-1">
                    <p className="border-b border-stone-600/20">excelrasayanexport@gmail.com</p>
                    <CopyButton text="excelrasayanexport@gmail.com"/>
                  </div>
                  <div className="flex gap-2 items-center mb-2 px-1">
                    <p className="border-b border-stone-600/20">exportexcelrasayan@gmail.com</p>
                    <CopyButton text="exportexcelrasayan@gmail.com"/>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center mb-2">
                <MapPin size={20} className="text-stone-600"/>
                <p><span className="text-stone-600">Office Address: </span>1028, fhowufh</p>
              </div>
              <div className="flex gap-2 items-center mb-2">
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
      </div>
      {/* <div className='w-[300px] h-[300px] bg-white absolute -bottom-[10%] right-[20%] rounded-[100%] overflow-hidden'>
        <img className='w-full h-full object-fill	' src="/images/about-page/section-1.jpg" />
      </div>
      <div className='w-[100px] h-[100px]  bg-white absolute bottom-[40%] right-[5%] rounded-[100%] overflow-hidden '>
        <img className='w-full h-full object-fill	' src="/images/about-page/section-2a.jpg" />
      </div> */}
    </main>
  )
}

export default page
