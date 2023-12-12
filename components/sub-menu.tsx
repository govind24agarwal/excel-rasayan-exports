import React from 'react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface SubMenuProps {
  triggerText: string,
  submenuList: Array<{href: string, label: string}>,
  active?: boolean,
  href: string,
}

const SubMenu: React.FC<SubMenuProps>  = ({
  triggerText,
  submenuList,
  active,
  href
}) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              'text-sm font-medium transition-colors hover:text-black',
              active ? 'text-black dark:text-white' : 'text-neutral-500'
            )}
          >
            <Link href={href}>
              {triggerText}
            </Link>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            {submenuList.map(item => {
              return(
              <Link href={item.href} legacyBehavior passHref className='w-full'>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(),"px-4 w-full whitespace-nowrap justify-start pr-20")}
                >
                  {item.label}
                </NavigationMenuLink>
              </Link>
              )
            })}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default SubMenu;
