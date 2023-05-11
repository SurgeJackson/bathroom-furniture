"use client"

import { useState, useEffect } from 'react';
import { useAnimate, AnimatePresence, stagger, cubicBezier, motion } from "framer-motion";
import { XCircleIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

const InteractiveImage = props => {
  const [activeHotSpot, setActiveHotSpot] = useState("");

  const HotSpot = props => {
    return (
      <div className={"hotspot absolute block bg-transparent border-4  border-solid border-[#ffffff80] rounded-[100%] w-7 h-7 box-border cursor-pointer z-[2] ml-[-15px] mt-[-15px] drop-shadow-lg"}
        onClick={(event) => setActiveHotSpot(props.id)} style={{ top: props.top, left: props.left }} />
    )
  };

  const HotSpots = props.hotSpotsData ? props.hotSpotsData.map((obj, index) => {
    return (
      <div className="" key={obj.id}>
        {(obj.hotSpot != undefined) && (
          <HotSpot top={obj.hotSpot.top} left={obj.hotSpot.left} id={obj.id} index={index} />
        )}
        <AnimatePresence>
          {(activeHotSpot == obj.id) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 absolute bg-[#fefefe] min-h-[100px] w-[30%] min-w-[220px] max-w-[350px] z-[3] drop-shadow-lg" onClick={(event) => setActiveHotSpot("")}>
              <XCircleIcon className="absolute top-[-20px] right-[-20px] h-8 w-8 hover:opacity-80 cursor-pointer text-white" onClick={(event) => setActiveHotSpot("")} />
              <img className="max-w-full w-full h-[100px] md:h-[240px] p-0 align-middle" src={obj.material} />
              <div className="px-6 pt-4 pb-6">
                <div className="uppercase mb-4 w-full text-lg text-center">
                  <p>{obj.article}</p>
                  <p className="text-sm normal-case">{obj.materialName}</p>
                </div>
                <div className="w-full text-xs">
                  <p className="text-[#8e8f8f] text-justify">{obj.name}</p>
                  <p className="text-right text-base normal-case mt-5">
                    {"Стоимость: " + obj.price.toLocaleString() + " р."}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }) : <></>;

  function useHotSpotAnimation() {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      animate(".hotspot",
        {
          boxShadow: ["0 0 0 0 #fff",
            "0 0 0 40px rgba(255, 255, 255, 0)"]
        },
        {
          duration: 3,
          ease: cubicBezier(.19, 1, .22, 1),
          times: [0, .5],
          repeat: Infinity,
          repeatDelay: 2,
          delay: stagger(.4, { ease: [.32, .23, .4, .9] })
        });
    });

    return scope;
  }

  const scope = useHotSpotAnimation();

  // function onMouseDown(e) {
  //     hotSpotsData.push({id: hotSpotsData.length,
  //       left: (e.nativeEvent.offsetX / e.target.offsetWidth * 100).toFixed(2)+"%",
  //       top: (e.nativeEvent.offsetY / e.target.offsetHeight * 100).toFixed(2)+"%"});
  // }

  return (
    <section ref={scope} className="md:px-5 bg-[#454449] text-black">
      <div className="text-xl md:text-2xl text-[#c8a16e] uppercase p-5 text-center font-extralight tracking-widest">Композиция {props.title} в деталях</div>
      <div className="relative w-full max-w-full cursor-default bg-no-repeat bg-contain bg-local">
        <Image className="w-full max-w-full" src={props.image} priority={true} quality="100" width={2000} height={2000} sizes="150vw" alt={props.title}
        // onMouseDown={(e) => { onMouseDown(e) }} 
        onClick={(event) => setActiveHotSpot("")}
        />
        {HotSpots}
      </div>
    </section>
  );
}

export default InteractiveImage