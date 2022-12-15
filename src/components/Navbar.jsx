import React from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const handleMenuToggle = () => {
    setMobileMenu((prev) => !prev);
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href="./">
        <img src={logo} alt="Hoobank" className="w-[124px] h-[32px]" />
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-10">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="font-poppins cursor-pointer text-base text-white hover:text-secondary"
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <button
          type="button"
          className="border-none"
          onClick={handleMenuToggle}
        >
          <img
            src={mobileMenu ? close : menu}
            alt="Menu button"
            className="w-7 h-7 object-contain cursor-pointer"
          />
        </button>

        <div
          className={`${
            mobileMenu ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="font-poppins cursor-pointer text-base text-white"
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
