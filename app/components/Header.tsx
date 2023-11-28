import Image from "next/image";

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
      <h1>Right sides</h1>
    </div>
  );
};

export default Header;
