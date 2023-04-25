"use client"

import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import 'animate.css';

import { AnimatePresence, motion } from "framer-motion";

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] })

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

const Slider = props => {
    return (
        <div className="h-[100lvh] md:h-[80vh] xl:h-[90vh]">
            <OwlCarousel items={1}
                className="owl-theme h-full m-0 p-0"
                loop={true}
                nav={false}
                dots={false}
                autoplay={true}
                autoplayTimeout={8000}
                animateIn={"animate__slideInRight"}
                animateOut={"animate__slideOutLeft"}
                //slideTransition={"linear"}
                smartSpeed={8000}
                fluidSpeed={8000}
                lazyLoad={false}
                touchDrag={false}
                mouseDrag={false}
                margin={0}
                onInitialized={(event) => {
                    $('.owl-stage', event.target).addClass('h-full');
                    $('.owl-stage-outer', event.target).addClass('h-full w-full');
                    $('.owl-item', event.target).addClass('h-full');
                }}
            // onChanged={(event) => {
            //     $('img', event.target).eq(event.item.index).addClass('animate-[forward_8s_ease-out_forwards]');
            // }}
            // onChange={(event) => {
            //     $('img', event.target).removeClass('animate-[forward_8s_ease-out_forwards]');
            // }}
            >
                {props.sliderData.map((obj) => {
                    return (
                        <li className="w-full h-full max-w-[100%] overflow-hidden list-none" key={obj.id}>
                            <div className="h-full bg-[75%] bg-cover" key={obj.id}>
                                <div className="absolute flex justify-end items-end w-full h-full top-0 left-0 text-4xl md:text-5xl z-[3] text-[#ffffff] text-right">
                                    <div className={`${montserrat.className} leading-tight font-light  uppercase drop-shadow-md mb-36 md:mb-10 mx-10 md:mx-20`}>
                                        {obj.title}  
                                    </div>
                                </div>
                                <motion.div
                                    initial={{ translateX: "100px" }}
                                    animate={{ translateX: "0", transition: { delay: 0.5, duration: "8", repeat: Infinity, repeatType: "reverse" } }}
                                    exit={{ translateX: "100px", transition: { delay: 0.5, duration: "8" } }}
                                    className="relative h-full">
                                    <Image 
                                        className="!w-[calc(100%_+_100px)] max-w-none ml-[-100px] object-cover object-center h-full"
                                        src={obj.image}
                                        alt={obj.id}
                                        priority={true}
                                        quality="100"
                                        fill sizes="150vw"
                                        // placeholder="blur"
                                        // blurDataURL={obj.blurDataURL}
                                    />
                                </motion.div>
                            </div>
                        </li>
                    )
                })}
            </OwlCarousel>
        </div>
    )
}

export default Slider