"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { toast } from "sonner"

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({
    name: false,
    mobileNumber: false
  });

  const [isMounted, setIsMounted] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: fullname,
        email,
        message,
        mobileNumber,
      }),
    });

    const { msg, status } = await res.json();

    if(msg?.name || msg?.mobileNumber){
      setError(msg);
      setTimeout(()=> setError({
        name: false,
        mobileNumber: false
      }),5000)
  
      toast("Please fill necessary details",{})

    }
    else if (status) {
      setFullname("");
      setEmail("");
      setMessage("");
      setMobileNumber("");

      toast("Contact details recieved.")
    }
    else{
      toast("Unable to contact Admin right now, Please try again later",{})
    }
  };

  useEffect(()=>{
    setIsMounted(true);
  },[])

  if(!isMounted) return null;

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start gap-4 w-full"
      >
        <div className="flex flex-col gap-4 w-full">
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="Full Name or Company Name"
            className={cn("w-full py-2 border-b px-1", error && error.name ? 'placeholder-red-600/90' : '')}
          />
          <input
            onChange={(e) => setMobileNumber(e.target.value)}
            value={mobileNumber}
            type="text"
            id="mobileNumber"
            placeholder="Phone Number"
            className={cn("w-full py-2 border-b px-1", error && error.name ? 'placeholder-red-600/90' : '')}
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="Email"
            className="w-full py-2 border-b px-1"
          />
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="h-32 w-full py-2 border-b px-1"
            id="message"
            placeholder="Type your message here..."
          >
          </textarea>
        </div>

        <button className="bg-stone-600 p-3 text-white font-bold rounded-sm mt-2" type="submit">
          Send Message
        </button>
      </form>
    </>
  );
}