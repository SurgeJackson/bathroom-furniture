'use client';

import { useContext } from 'react';
import Image from 'next/image';
import { SideMenuContext } from './Header';
import { AnimatePresence, motion } from "framer-motion";

const data = [
  {
    "image": "https://st.bork.ru/images/catalog/blur/kitchen.jpg",
    "caption": "Мебель для ванной комнаты"
  },
  {
    "image": "https://st.bork.ru/images/catalog/blur/home-and-climate.jpg",
    "caption": "Смесители"
  },
  {
    "image": "https://st.bork.ru/images/catalog/blur/new.jpg",
    "caption": "Керамогранит"
  },
  {
    "image": "https://st.bork.ru/images/catalog/blur/kit.jpg",
    "caption": "Инженерная доска"
  },
  {
    "image": "https://st.bork.ru/images/catalog/blur/kit.jpg",
    "caption": "Душевые системы"
  },
  {
    "image": "https://st.bork.ru/images/catalog/blur/beauty.jpg",
    "caption": "Сантехника"
  },
  {
    "image": "https://st.bork.ru/images/catalog/blur/bork-home.jpg",
    "caption": "Душевые ограждения"
  },
  {
    "image": "https://st.bork.ru/images/catalog/blur/gift-ideas.jpg",
    "caption": "Ванны"
  },
  {
    "image": "https://st.bork.ru/images/catalog/blur/kit.jpg",
    "caption": "Аксессуары"
  },
  {
    "image": "https://st.bork.ru/images/catalog/blur/kit.jpg",
    "caption": "Душевые кабины"
  },
];

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.01,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.01,
      staggerDirection: 1
    }
  }
};

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  }
};

const Menu = () => {
  let { isOpen, setIsOpen } = useContext(SideMenuContext);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          className="fixed top-0 right-0 bottom-0 left-0 h-[100dvh] bg-[#00000080]" onClick={(event) => setIsOpen(false)}
        >
          <motion.div
            initial={{ translateX: "-100%" }}
            animate={{ translateX: 0 }}
            exit={{ translateX: "-100%", transition: { duration: 0.3 } }}
            className="absolute top-0 right-0 bottom-0 left-0 w-[100dvw] md:w-[400px] h-[100dvh]"
          >
            <div className="flex flex-col h-full p-[10px] bg-no-repeat bg-[50%] bg-cover">
              <div className="flex justify-between items-center pr-[35px]">
                <button className="relative flex flex-grow-0 flex-shrink-0 basis-[50px] w-[50px] h-[50px] text-[0px] before:absolute before:top-[-50%] before:right-[-50%] before:bottom-[-50%] before:left-[-50%] before:w-[10px] before:h-[10px] before:m-auto before:border-t before:border-r before:rotate-[-135deg]" onClick={(event) => setIsOpen(false)}>
                  Закрыть
                </button>
              </div>
              <nav className="overflow-y-auto">
                <motion.ul
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={sideVariants}
                  className="[&>*:first-child>img]:opacity-100 mt-[10px] mr-[10px] mb-[20px] ml-[10px] pt-0 pr-[20px] pb-0 pl-[20px] list-none">
                  {data.map((obj) => {
                    return (
                      <li className="group" key={obj.caption}>
                        <motion.a
                          href="#"
                          className="block pt-[15px] pr-0 pb-[15px] pl-0 text-white text-lg uppercase tracking-[.04em]"
                          variants={itemVariants}
                          whileHover={{ scale: 1.025 }}>
                          {obj.caption}
                        </motion.a >
                        <Image className="absolute w-full h-full object-cover object-center top-0 right-0 bottom-0 left-0 z-[-1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" src={obj.image} width={636} height={880} alt={obj.caption}/>
                      </li>
                    )
                  })}
                </motion.ul>
                <div></div>
                <ul></ul>
              </nav>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Menu