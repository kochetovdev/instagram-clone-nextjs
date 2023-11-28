import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-w-6xl">
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
      <h1>Right sides</h1>
    </div>
  );
};

export default Header;
