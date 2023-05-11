'use client'

import { useEffect } from 'react';
import Image from "next/image";

const data = [
    {
        "groupId": 1,
        "name": "Wash-basin cabinets",
        "description": "Wood natural effect is recalled by a range of melamine coated finishes with 4 different woods and colors matching several aesthetic lines and trends.",
        "items": [
            {
                "id": 1,
                "name": "d-art-wb-cab-30",
                "image": "/images/bathroom-furniture/collections/d-art/modules/d-art-wb-cab-30.png"
            },
            {
                "id": 2,
                "name": "d-art-wb-cab-40",
                "image": "/images/bathroom-furniture/collections/d-art/modules/d-art-wb-cab-40.png"
            },
            {
                "id": 3,
                "name": "d-art-wb-cab-601",
                "image": "/images/bathroom-furniture/collections/d-art/modules/d-art-wb-cab-601.png"
            },
            {
                "id": 4,
                "name": "d-art-wb-cab-602",
                "image": "/images/bathroom-furniture/collections/d-art/modules/d-art-wb-cab-602.png"
            },
            {
                "id": 5,
                "name": "d-art-wb-cab-80",
                "image": "/images/bathroom-furniture/collections/d-art/modules/d-art-wb-cab-80.png"
            },
        ]
    },
    {
        "groupId": 2,
        "name": "Lateral cabinets",
        "description": "Our collections front drawers are available also in solid wood, with a range of 7 different colors. The texture of solid wood doors, framed or flat, is due to a superficial brushing. This allows a tactile feeling.",
        "items": [
            {
                "id": 1,
                "name": "d-art-lat-cab-30",
                "image": "/images/bathroom-furniture/collections/d-art/modules/d-art-lat-cab-30.png"
            },
            {
                "id": 2,
                "name": "d-art-lat-cab-40",
                "image": "/images/bathroom-furniture/collections/d-art/modules/d-art-lat-cab-40.png"
            },
            {
                "id": 3,
                "name": "d-art-lat-cab-601",
                "image": "/images/bathroom-furniture/collections/d-art/modules/d-art-lat-cab-601.png"
            },
            {
                "id": 4,
                "name": "d-art-lat-cab-602",
                "image": "/images/bathroom-furniture/collections/d-art/modules/d-art-lat-cab-602.png"
            },
            {
                "id": 5,
                "name": "d-art-lat-cab-80",
                "image": "/images/bathroom-furniture/collections/d-art/modules/d-art-lat-cab-80.png"
            },
        ]
    },
    {
        "groupId": 3,
        "name": "Open lateral cabinets",
        "description": "Metal finish is the handmade result of the application of coatings containing metal powders. Different powders lead to different highlights and the effects are comparableto iron, steel and brass features. Available in Steel, Titanium and Brass finishes.",
        "items": [
            {
                "id": 1,
                "name": "d-art-open-lat-cab-30",
                "image": "/images/bathroom-furniture/collections/d-art/modules/d-art-open-lat-cab-30.png"
            },
            {
                "id": 2,
                "name": "d-art-open-lat-cab-40",
                "image": "/images/bathroom-furniture/collections/d-art/modules/d-art-open-lat-cab-40.png"
            },
            {
                "id": 3,
                "name": "d-art-open-lat-cab-60",
                "image": "/images/bathroom-furniture/collections/d-art/modules/d-art-open-lat-cab-60.png"
            },
            {
                "id": 4,
                "name": "d-art-open-lat-cab-80",
                "image": "/images/bathroom-furniture/collections/d-art/modules/d-art-open-lat-cab-80.png"
            },
        ]
    },
    {
        "groupId": 4,
        "name": "Hanging Cabinets",
        "description": "Wood natural effect is recalled by a range of melamine coated finishes with 4 different woods and colors matching several aesthetic lines and trends.",
        "items": [
            {
                "id": 1,
                "name": "d-art-col-85",
                "image": "/images/bathroom-furniture/collections/d-art/modules/d-art-col-85.png"
            },
            {
                "id": 2,
                "name": "d-art-col-120",
                "image": "/images/bathroom-furniture/collections/d-art/modules/d-art-col-120.png"
            },
            {
                "id": 3,
                "name": "d-art-col-1201",
                "image": "/images/bathroom-furniture/collections/d-art/modules/d-art-col-1201.png"
            },
            {
                "id": 4,
                "name": "d-art-col-160",
                "image": "/images/bathroom-furniture/collections/d-art/modules/d-art-col-160.png"
            },
            {
                "id": 5,
                "name": "d-art-col-197",
                "image": "/images/bathroom-furniture/collections/d-art/modules/d-art-col-197.png"
            },
            {
                "id": 6,
                "name": "d-art-col-1972",
                "image": "/images/bathroom-furniture/collections/d-art/modules/d-art-col-1972.png"
            },
        ]
    }
]

const ModulesGroups = data.map((obj) => {
    return (
        <div key={obj.groupId}>
            <div className="text-xl md:text-2xl text-center p-5 font-extralight tracking-widest uppercase text-[#c8a16e]">
                {obj.name}
            </div>
            <div className="text-lg md:text-xl pb-5 px-10 text-left font-extralight md:max-w-[75%] w-[90%] leading-relaxed md:leading-relaxed space-y-5 mb-10">
                {obj.description}
            </div>
            <div className="spotlight-group flex flex-row flex-wrap justify-center m-2 gap-1">
                {obj.items.map((item) => {
                    return (
                        <div className="relative w-[300px] h-[300px] object-contain overflow-hidden my-5" key={item.id}>
                            <Image className="spotlight cursor-pointer"
                                data-theme="white"
                                src={item.image} 
                                alt={item.name} 
                                fill 
                                quality="100" 
                                priority={false}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                        </div>
                    )
                })}
            </div>
        </div>
    )
})

const Modules = () => {
    useEffect(() => {
        const use = async () => {
          (await import('spotlight.js')).default;
        };
        use();
      }, []);

    return (
        <section className="pb-5 bg-white text-black">
            Modules
            {ModulesGroups}
        </section>
    )
}

export default Modules
