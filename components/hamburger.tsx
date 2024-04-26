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
      <SheetContent side="left" className='bg-gradient-to-b from-[#2b7535] to-[#399e47] overflow-hidden'>
        <div className='flex flex-col gap-5 mt-12'>
          {routes.map((route) => {
            return (
              <div key={route.href} onClick={() => setIsShowMenu(false)} className='flex items-center justify-left gap-4 w-full'>
                {route.icon}
                <Link
                  href={route.href}
                  className={cn(
                    'text-lg font-medium transition-colors hover:text-black text-white',
                    route.active ? 'text-white' : ''
                  )}
                >
                  {route.label}
                </Link>
              </div>
              )

          })}
        </div>
        <div className='absolute w-52 h-52 rounded-full bg-white/30 -bottom-24 -left-12'></div>
        <div className='absolute w-full h-52 rounded-full bg-white/30 top-[50%] -right-24'></div>
      </SheetContent>
    </Sheet>
  )
}

export default Hamburger
