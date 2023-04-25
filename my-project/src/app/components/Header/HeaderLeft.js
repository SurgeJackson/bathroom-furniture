'use client';

import React from 'react';
import { useContext } from 'react';
import { Bars4Icon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { SideMenuContext } from './Header';

const HeaderLeft = props => {
  let { isOpen, setIsOpen } = useContext(SideMenuContext);

  return (
    <div className="flex flex-wrap ml-2 justify-start items-center text-[#d1d1d1]">
      <Bars4Icon className="h-6 w-6 m-1 md:m-2 opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer" onClick={(event) => setIsOpen(!isOpen)}/>
      <MapPinIcon className="h-6 w-6 m-1 md:m-2 opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer" />
      <PhoneIcon className="h-6 w-6 m-1 md:m-2 opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-pointer" />
    </div>
  )
}

export default HeaderLeft