'use client';

import HeaderLeft from './HeaderLeft';
import HeaderCenter from './HeaderCenter';
import HeaderRight from './HeaderRight';
import Menu from './Menu';

import { createContext, useState } from 'react';

export const SideMenuContext = createContext({});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SideMenuContext.Provider value={{isOpen, setIsOpen}}>
      <header className="bg-[#1f1f21cc] fixed w-full grid grid-cols-3 h-[60px] pt-1 pb-1 before:absolute before:bg-gradient-to-r from-[#ffffff00] via-[#ffffff80] to-[#ffffff00]] before:h-[1px] before:right-0 before:left-0 before:bottom-0 z-[999] hover:bg-[#1f1f21] transition-all duration-200 shadow-md">
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
        <Menu />
      </header>
    </SideMenuContext.Provider>
  )
}

export default Header