"use client"

import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link';
import Image from "next/image";

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
      <figure className="flex flex-col items-center p-2">
        <Link className="w-full h-full" href={props.link}>
          <Image 
            className="w-full"
            src={props.filename} 
            alt={props.caption} 
            priority={false}
            quality="100"
            //fill sizes="150vw"
            width={685}
            height={440}
            />
          <figcaption className="flex flex-col gap-1 text-left border border-solid border-gray-400 p-3 w-full">
            <div className="text-4xl text-[#c8a16e]">
              {props.caption}
            </div>
            <div className="">
              {props.description}
            </div>
          </figcaption>
        </Link>
      </figure>
    </motion.div>
  )
}

export default CompositionFigure