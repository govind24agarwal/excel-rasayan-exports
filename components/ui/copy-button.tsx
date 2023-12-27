"use client"
import { Copy } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';

const CopyButton = ({
  text
}:{text: string}) => {

  const [isMounted, setIsMounted] = useState(false);

  const copyText = (entryText: string) => {
    navigator.clipboard.writeText(entryText);
    toast('copied')
  }

  useEffect(()=>{
    setIsMounted(true);
  },[])

  if(!isMounted) return null;

  return (
    <button onClick={() => copyText(text)}>
      <Copy size={16}/>
    </button>
  )
}

export default CopyButton
