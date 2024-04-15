import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";

const Navbar = async () => {

  return ( 
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-sm lg:text-xl">EXCEL RASAYAN EXPORT</p>
          </Link>
          <MainNav />
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;
