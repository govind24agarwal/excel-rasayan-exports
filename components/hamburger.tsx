"use client"
import React, { useState } from 'react'
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
        <MenuIcon color="white" size={20} className="text-gray-600" />
      </SheetTrigger>
      <SheetContent side="left" className='bg-gradient-to-b from-[#2b7535] to-[#399e47] overflow-hidden p-0'>
        <SheetHeader className='bg-white py-4 px-2 border-b-2 border-teal-900'>
          <SheetTitle className='text-left'>EXCEL RASAYAN EXPORT</SheetTitle>
        </SheetHeader>
        <div className='relative flex flex-col gap-5 h-full'>
          <div className='flex flex-col gap-5 p-4'>
            {routes.map((route) => {
              if(route.href === `/products`){
                return (
                  <Accordion key={route.href} type="single" collapsible className='z-20'>
                    <AccordionItem className='border-b-0' value="item-1">
                      <AccordionTrigger className='justify-left gap-4 text-white py-0 hover:no-underline'>
                        {route.icon}
                        {route.label}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className='flex flex-col text-white mt-2'>
                          {route.submenuList.map((submenuItem: any) =>
                            (
                              <Link key={submenuItem.href} onClick={() => setIsShowMenu(false)} className='py-1 text-base pl-10' href={submenuItem.href}>{submenuItem.label}</Link>
                            )
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )
              }
              else{
                return (
                    <Link
                      href={route.href}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-black text-white z-20',
                        route.active ? 'text-white' : ''
                      )}
                      key={route.href}
                    >
                      <div onClick={() => setIsShowMenu(false)} className='flex items-center justify-left gap-4 w-full'>
                        {route.icon}
                        {route.label}
                      </div>
                    </Link>
                  )
              }
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
