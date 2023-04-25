import React from 'react'
import { MapPinIcon } from '@heroicons/react/24/outline';

const Video = () => {
    return (
        <div className="relative h-[645px] w-full overflow-hidden bg-cover">
            <video
                className="top-0 right-0 w-full h-full object-cover object-center brightness-50"
                loop="loop"
                muted={true}
                playsInline={true}
                src="https://sturmproject.ru/video/sturm_boutiques.mp4"
                autoPlay={true} />
            <div className="flex flex-col justify-center absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-3/4 z-[100] text-white text-center font-extralight">
                <div className="text-3xl font-extralight tracking-wider pb-5">Магазины STURM</div>
                <div className="text-xl">Познакомьтесь с коллекциями продукции в атмосфере заботы и уюта</div>
                <div className="flex flex-col md:flex-row justify-evenly items-center gap-2 pt-10 font-extralight">
                    <div className="flex flex-col justify-center items-center md:gap-5 pb-10">
                        <MapPinIcon className="h-6 w-6" />
                        <p>Санкт-Петербург, ул.Наличная, д.14 <br/> 10 - 21 пн-вс</p>
                    </div>
                    <div className="flex flex-col justify-center items-center md:gap-5 pb-10">
                        <MapPinIcon className="h-6 w-6" />
                        <p>Санкт-Петербург, ул.Съезжинская, д.11 <br/> 10 - 21 пн-вс</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video