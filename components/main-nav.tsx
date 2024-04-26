"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import SubMenu from "./sub-menu";
import Hamburger from "@/components/hamburger";
import { HomeIcon } from "lucide-react";
interface MainNavProps {
}

const MainNav: React.FC<MainNavProps> = ({
}) => {
  const pathname = usePathname();

  const routes = [
    {
      href: `/`,
      label: 'Home',
      active: pathname === `/`,
      icon: <HomeIcon size={20} className="text-white" />
    },
    {
      href: `/products`,
      label: 'Our Products',
      active: pathname === `/products`,
      icon: <HomeIcon size={20} className="text-white" />,
      submenuList: [
        {
          href: `/products/insecticides`,
          label: 'Insecticides',
        },
        {
          href: `/products/herbicides`,
          label: 'Herbicides',
        },
        {
          href: `/products/fungicides`,
          label: 'Fungicides',
        },
        {
          href: `/products/plant-growth-regulators`,
          label: 'Plant Growth Regulators',
        },
        {
          href: `/list-view`,
          label: 'View List',
        },
      ],
      component: (
        <SubMenu
          triggerText="Our Products"
          active={pathname === `/products`}
          href='/products'
          submenuList={[
            {
              href: `/products/insecticides`,
              label: 'Insecticides',
            },
            {
              href: `/products/herbicides`,
              label: 'Herbicides',
            },
            {
              href: `/products/fungicides`,
              label: 'Fungicides',
            },
            {
              href: `/products/plant-growth-regulators`,
              label: 'Plant Growth Regulators',
            },
            {
              href: `/list-view`,
              label: 'View List',
            },
          ]}
        />
      )
    },
    {
      href: `/about`,
      label: 'About us',
      active: pathname === `/about`,
      icon: <HomeIcon size={20} className="text-white" />

    },
    {
      href: `/contact-us`,
      label: 'Contact us',
      active: pathname === `/contact-us`,
      icon: <HomeIcon size={20} className="text-white" />
    }
  ]
  

  return (
    <nav>
      <div className="hidden md:flex px-6 items-center space-x-4 lg:space-x-6">
        {routes.map((route) => {
          if(route.component) return route.component
          return (<Link
            key={route.href}
            href={route.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-black',
              route.active ? 'text-black dark:text-white' : 'text-neutral-500'
            )}
          >
            {route.label}
        </Link>)
        })}
      </div>
      <div className="block md:hidden">
        <Hamburger routes={routes}/>
      </div>
    </nav>
  )
};

export default MainNav;
