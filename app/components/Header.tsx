import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import AuthStatus from "./AuthStatus";
import HomeModal from "./HomeModal";

const Header = () => {
  return (
    <article className="sticky top-0 shadow-sm border-b bg-white z-30">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        <div className="w-24 h-24 relative hidden lg:inline-grid cursor-pointer">
          <Image
            className="object-contain"
            layout="fill"
            src="https://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
            alt="Instagram"
          />
        </div>
        <div className="w-10 h-24 relative lg:hidden cursor-pointer">
          <Image
            className="object-contain"
            layout="fill"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
            alt="Instagram logo"
          />
        </div>
        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <MagnifyingGlassIcon className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
          />
        </div>
        <div className="flex space-x-4 items-center">
          <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          <HomeModal />
          <AuthStatus />
        </div>
      </div>
    </article>
  );
};

export default Header;
