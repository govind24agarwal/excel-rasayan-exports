"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const ChatWhatsappButton = () => {
  const [isMounted, setIsMounted] = useState(false);

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
  );

  useEffect(()=>{
    setIsMounted(true);
  },[])

  if(!isMounted) return null;

  return (
    <Link
      href="https://wa.me/8126069112?text=Hello"
      className="flex items-center gap-2 border mr-auto p-4 mt-4 bg-white rounded-xl font-semibold shadow-md"
    >
    {/* <Phone size={20} className="text-stone-600"/> */}
    {whatsappSvg}
    <p className="text-stone-600">
      Chat on whatsapp
    </p>
  </Link>
  )
}

export default ChatWhatsappButton
