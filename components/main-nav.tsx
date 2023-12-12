"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

import SubMenu from "@/components/sub-menu";
import { cn } from "@/lib/utils"

interface MainNavProps {
}

const MainNav: React.FC<MainNavProps> = ({
}) => {
  const pathname = usePathname();

  const routes = [
    {
      href: `/`,
      label: 'Home',
      active: pathname === `/`
    },
    {
      href: `/products`,
      label: 'Our Products',
      active: pathname === `/products`,
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
            href: `/products/list-view`,
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
    },
    {
      href: `/manufactoring`,
      label: 'Manufactoring',
      active: pathname === `/manufactoring`,
    },
    {
      href: `/research-development`,
      label: 'R & D',
      active: pathname === `/research-development`,
    },
    {
      href: `/our-presence`,
      label: 'Our Presence',
      active: pathname === `/our-presence`,
    }
  ]

  return (
    <nav
      className="hidden md:flex px-6 items-center space-x-4 lg:space-x-6"
    >
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
    </nav>
  )
};

export default MainNav;
