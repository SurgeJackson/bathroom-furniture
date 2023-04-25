'use client'

import React, { useEffect } from 'react';
import data from './data.json';
import MaterialFigure from './MaterialFigure';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] })

const MaterialGroups = data.map((obj) => {
  return (
    <div className="font-light" key={obj.name}>
      <div className="text-3xl text-[#c8a16e] uppercase py-5">
        {obj.name}
      </div>
      <div className="text-white text-justify">
        {obj.description}
      </div>
      <div className="spotlight-group flex flex-wrap justify-center p-2 gap-1">
        {obj.items.map((item) => {
          return (<MaterialFigure
            caption={item.name}
            filename={item.image}
            group={obj.name}
            key={item.name} />)
        })}
      </div>
    </div>
  )
})

const Materials = () => {
  useEffect(() => {
    const use = async () => {
      (await import('spotlight.js')).default;
    };
    use();
  }, []);

  return (
    <section className={`${montserrat.className} md:px-20 bg-[#454449]`}>
      <h2 className="text-2xl text-[#c8a16e] uppercase px-2 pt-5 text-center md:text-4xl md:p-10 font-extralight">Обзор материалов</h2>
      <div className="px-10">
        {MaterialGroups}
      </div>
    </section>
  )
}

export default Materials