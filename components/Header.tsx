import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SearchIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/outline';

function Header() {
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link legacyBehavior href="/">
          <div className="relative h-10 w-5 cursor-pointer opacity-75 transition hover:opacity-100 ">
            <Image src="https://rb.gy/vsvv2o" fill className="object-contain" alt="img" />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>
      <div className="">
        <SearchIcon className="headerIcon" />
        <div className="relative cursor-pointer">
          <span className="absolute -right-1 -top-1">5</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
