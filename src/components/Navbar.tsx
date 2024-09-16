import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import dynamic from "next/dynamic";
// import NavIcons from "./NavIcons";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
  return (
    // MAIN NAVBAR WRAPPER------------------
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative bg-gradient-to-r from-pink-100 to-white-500">

      {/* MOBILE VARIANT PSEUDO COMPONENT------------------- */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
           <Image src="/logo.png" alt="" width={120} height={120} />
          {/* <div className="text-2xl tracking-wide">BESPOKE XV & FORMAL</div> */}
        </Link>
        <div className="flex items-center gap-8">
          <NavIcons />
          <Menu />
        </div>
      </div>
      {/* MOBILE VARIANT PSEUDO COMPONENT------------------- */}

      {/* BIGGER SCREENS MUTATION----------------- */}
      <div className="hidden md:flex items-center text-bluey justify-between gap-8 h-full">

        {/* LEFT-------------------------------------- */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={120} height={120} />
            {/* <div className="text-1xl tracking-wide font-semibold">BESPOKE</div> */}
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/" className="hover:transition duration-500 hover:scale-110">Home</Link>
            <div className="relative group">
              <div className="flex items-center">
                <Link href="/list?cat=all-products" className="hover:transition duration-500 hover:scale-110">Store</Link>
              </div>
              <div className="absolute rounded-md text-center left-1/2 transform -translate-x-1/2 hidden group-hover:flex flex-col subm shadow-lg gap-2 mt-0 z-10 w-56">
              <Link href="/list?cat=accessories" className="px-4 py-2 hover:text-hovr hover:font-semibold">Accessories</Link>
                <Link href="/list?cat=best-sellers" className="px-4 py-2 hover:text-hovr hover:font-semibold">Best Sellers</Link>
                <Link href="/list?cat=children" className="px-4 py-2 hover:text-hovr hover:font-semibold">Children</Link>
                <Link href="/list?cat=new-collection" className="px-4 py-2 hover:text-hovr hover:font-semibold">New Collection</Link>
                <Link href="/list?cat=prom" className="px-4 py-2 hover:text-hovr hover:font-semibold">PROM</Link>
                <Link href="/list?cat=quinceanera" className="px-4 py-2 hover:text-hovr hover:font-semibold">Quinceanera</Link>
                <Link href="/list?cat=special-ocassion" className="px-4 py-2 hover:text-hovr hover:font-semibold">Special Ocassion</Link>
                <Link href="/list?cat=tuxedos-suits" className="px-4 py-2 hover:text-hovr hover:font-semibold">Tuxedos & Suits</Link>
              </div>
            </div>
            <Link href="/about" className="hover:transition duration-500 hover:scale-110">About</Link>
            <Link href="/contact" className="hover:transition duration-500 hover:scale-110">Contact</Link>
          </div>
        </div>

        {/* RIGHT --------------------------------------*/}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>

      </div>
      {/* BIGGER SCREENS MUTATION----------------- */}

    </div>// MAIN NAVBAR WRAPPER------------------
  );
};

export default Navbar;
