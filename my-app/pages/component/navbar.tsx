import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {AiOutlineMenu} from 'react-icons/ai';
import {MdAccountCircle} from 'react-icons/md';
const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchQuery !== "") {
      router.push(`/search?q=${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="flex flex-wrap items-center justify-between bg-gradient-to-r from-green-400 to-blue-500 px-4 py-3">
      <AiOutlineMenu
        className=" text-xl md:hidden"
        onClick={handleMenuClick}
        />
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold text-white mr-10 md:mr-6">
          Event Planner
        </Link>

        <form onSubmit={handleSearchSubmit}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="px-3 w-40 md:w-64 py-2 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:shadow-outline"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-2 mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </form>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:flex flex-grow sm:flex-grow-0 md:items-center mt-4 sm:mt-0`}
      >
        <ul className="sm:flex flex-row">
          <NavItem href="/" label="Home" active={router.pathname === "/"} />
          <NavItem href="/about" label="Events" active={router.pathname === "/about"} />
          <NavItem href="/contact" label="Contact" active={router.pathname === "/contact"} />
        </ul>
        <Link href={'/Login'}><MdAccountCircle className='text-3xl text-white' /></Link>
      </div>
    </nav>
  );
};

type NavItemProps = {
  href: string;
  label: string;
  active: boolean;
};
const NavItem = ({ href, label, active }: NavItemProps) => {
    return (
      <li className="mr-6">
        <Link href={href}
          
            className={`${
              active ? "font-bold text-white" : "text-gray-200"
            } hover:text-white`}
        >
            {label}
          
        </Link>
      </li>
    );
  };

  export default Navbar
  
