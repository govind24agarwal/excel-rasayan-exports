"use client"
import React, { useState } from 'react'
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link';
import { cn } from '@/lib/utils';


interface HamburgerProps {
  routes: Array<any>
}

const Hamburger: React.FC<HamburgerProps> = ({
  routes
}) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  return (
    <Sheet open={isShowMenu} onOpenChange={setIsShowMenu}>
      <SheetTrigger>
        <MenuIcon size={20} className="text-gray-600" />
      </SheetTrigger>
      <SheetContent side="left" className='bg-gradient-to-b from-[#2b7535] to-[#399e47] overflow-hidden p-0'>
        <SheetHeader className='bg-white py-4 px-2 border-b-2 border-teal-900'>
          <SheetTitle className='text-left '>EXCEL RASAYAN EXPORT</SheetTitle>
        </SheetHeader>
        <div className='relative flex flex-col gap-5 h-full'>
          <div className='flex flex-col gap-5 p-4'>
            {routes.map((route) => {
              return (
                  <Link
                    href={route.href}
                    className={cn(
                      'text-lg font-medium transition-colors hover:text-black text-white z-20',
                      route.active ? 'text-white' : ''
                    )}
                  >
                    <div key={route.href} onClick={() => setIsShowMenu(false)} className='flex items-center justify-left gap-4 w-full'>
                      {route.icon}
                        {route.label}
                    </div>
                  </Link>
                )
              })}
          </div>
          <div className='absolute w-full h-full bg-black/40 z-10' />
        </div>
        <div className='absolute w-52 h-52 rounded-full bg-white/40 -bottom-24 -left-12 z-20'></div>
        <div className='absolute w-full h-52 rounded-full bg-white/40 top-[50%] -right-24 z-20'></div>
      </SheetContent>
    </Sheet>
  )
}

export default Hamburger
