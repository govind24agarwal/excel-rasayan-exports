import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import Image from "next/image";

const Navbar = async () => {

  return ( 
    <div className="border-b z-50 bg-gradient-to-r from-[#000044] to-[#004d00] py-1">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-12 md:h-16 items-center justify-between">
          <Link href="/" className="flex gap-x-2 h-full items-center">
            <Image width={56} height={56} className="h-9 w-9 md:h-14 md:w-14 rounded-full" alt='EXCEL RASAYAN EXPORT' src={'/images/logo.jpeg'} />
            <div className="flex flex-col items-center text-sm lg:text-2xl">
              <p className="text-yellow-400">Excel Rasayan Export</p>
              {/* <p className="text-yellow-400">Export</p> */}
            </div>
          </Link>
          <MainNav />
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;
