"use client"

import { motion } from "framer-motion"
import Link from 'next/link';
import Image from "next/image";
import { ArrowSmallRightIcon  } from '@heroicons/react/24/outline';

const CompositionFigure = props => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{ scale: 1.02, transition: { duration: 1 } }}
      whileTap={{ scale: 0.9 }}
    >
      <figure className="flex flex-col items-center p-2 rounded-full">
        <Link className="w-full h-full" href={props.link}>
          <Image 
            className="w-full border border-solid border-gray-500 border-b-0 rounded-t-xl"
            src={props.filename} 
            alt={props.caption} 
            priority={false}
            quality="100"
            //fill sizes="150vw"
            width={685}
            height={440}
            />
          <figcaption className="flex flex-row gap-1 justify-between items-center  text-left border border-solid border-gray-500 p-3 w-full rounded-b-xl">
            <div className="flex flex-col gap-1">
              <div className="text-3xl text-[#c8a16e] font-extralight">
                {props.caption}
              </div>
              <div className="font-extralight">
                {props.description}
              </div>
            </div>
            <ArrowSmallRightIcon className="w-5 h-5 mr-2 brightness-75"/>
          </figcaption>
        </Link>
      </figure>
    </motion.div>
  )
}

export default CompositionFigure