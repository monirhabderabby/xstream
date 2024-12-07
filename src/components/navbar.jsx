import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import Link from "next/link";
import { icons } from "./icons";

const Navbar = async ({ lang }) => {
  const dictionary = await getDictionary(lang);
  return (
    <header className="flex justify-between items-center mb-8">
      <div className="flex items-center space-x-8">
        <Link href="/">
          <img src="/logo.svg" alt="LWS Xstream Logo" className="h-6" />
        </Link>
        <nav className=" hidden md:flex space-x-6">
          <a href="#" className="text-color-purple font-semibold">
            {dictionary.navItem1}
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            {dictionary.navItem2}
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            {dictionary.navItem3}
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-color-gray rounded-full py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-color-purple"
          />
          {icons.search}
        </div>

        <img
          src="https://avatar.iran.liara.run/public"
          alt="User Avatar"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default Navbar;
