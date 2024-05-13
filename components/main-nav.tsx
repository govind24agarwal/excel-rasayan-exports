"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import SubMenu from "./sub-menu";
import Hamburger from "@/components/hamburger";
import { BugOff, Building2, HomeIcon, Mail, SprayCan } from "lucide-react";
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
      icon: <HomeIcon size={24} className="text-white" />
    },
    {
      href: `/products`,
      label: 'Our Products',
      active: pathname === `/products`,
      icon: <BugOff size={24} className="text-white -scale-x-100" />,
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
          active={pathname.startsWith('/products')}
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
      icon: <Building2 size={24} className="text-white" />

    },
    {
      href: `/contact-us`,
      label: 'Contact us',
      active: pathname === `/contact-us`,
      icon: <Mail size={24} className="text-white" />
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
              'z-20 text-sm font-medium transition-colors hover:text-yellow-400',
              route.active ? 'text-yellow-400 ' : 'text-white'
            )}
          >
            {route.label}
        </Link>)
        })}
      </div>
      <div className="block md:hidden text-white">
        {/* Side Menu */}
        <Hamburger routes={routes}/>
      </div>
    </nav>
  )
};

export default MainNav;
