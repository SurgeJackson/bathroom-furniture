import React from 'react'
import { Cinzel } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'] })

const Logo = () => {
    return (
        <a href='/' className={`${cinzel.className} uppercase text-[#d1d1d1] text-[35px] md:text-[37px] flex flex-col transition-all`}>
            <span className="self-center whitespace-nowrap">Sturm</span>
            <span className="text-[#c8a16e] self-center whitespace-nowrap text-[0.14em] md:text-[0.20em] tracking-[4.5px] mt-[-12px]">
                Philosophy of life
            </span>
        </a>
    )
}

export default Logo