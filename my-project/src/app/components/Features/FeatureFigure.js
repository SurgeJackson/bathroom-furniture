'use client'

import React from 'react'
import { useState, useRef, useLayoutEffect, ReactNode } from "react";
import Image from "next/image";

import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useReducedMotion,
} from "framer-motion";

const FeatureFigure = props => {
    return (
        <figure className="flex flex-col md:flex-row md:even:flex-row-reverse items-center justify-evenly gap-5 h-full p-5 md:p-10">
            <div className="flex justify-center h-[300px] w-[300px] md:h-[500px] md:w-[500px] m-2 rounded-3xl overflow-hidden z-[100]">
                <ParallaxImg
                    className="h-[calc(100%_+_155px)] top-[-77px] bottom-0 w-auto max-w-none relative"
                    src={props.filename} alt={props.filename}/>
            </div>
            <figcaption className="m-2 md:w-1/2">
                <div className="text-xl mb-3">
                    {props.caption}
                </div>
                <div>
                    {props.description}
                </div>
            </figcaption>
        </figure>
    )
}


const ParallaxImg = ({
    className = "",
    src = "",
    alt = ""
}) => {
    const prefersReducedMotion = useReducedMotion();
    const [elementTop, setElementTop] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);
    const ref = useRef(null);

    const { scrollY } = useScroll();

    const offset = 50;
    const clampInitial = 0;
    const clampFinal = 0;

    const initial = elementTop - clientHeight;
    const final = elementTop + offset;

    const yRange = useTransform(
        scrollY,
        [initial, final],
        [clampInitial ? 0 : offset, clampFinal ? 0 : -offset]
    );
    const y = useSpring(yRange, { stiffness: 400, damping: 90 });

    useLayoutEffect(() => {
        const element = ref.current;
        const onResize = () => {
            setElementTop(
                /* @ts-ignore-next */
                element.getBoundingClientRect().top + window.scrollY ||
                window.pageYOffset
            );
            setClientHeight(window.innerHeight);
        };
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [ref]);

    // Don't parallax if the user has "reduced motion" enabled
    if (prefersReducedMotion) {
        return <Image className={className} src={src} alt={alt} ref={ref} fill/>
    }

    return (
        <motion.img className={className} src={src} alt={alt} ref={ref} style={{ y }} />
    );
};

export default FeatureFigure