import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

const MaterialFigure = props => {
    return (
        <figure className="flex flex-col items-center justify-evenly p-1" onClick={(e) => props.handleClick(props)}>
            <div className="relative w-[95px] h-[95px] rounded-xl" style={{ backgroundImage: `url(${props.filename})` }}>
                <div className="flex flex-col items-center rounded-xl transition-all duration-300 justify-center absolute opacity-0 hover:opacity-100 w-full h-full hover: bg-[#00000080] cursor-pointer">
                    <figcaption className="text-xs px-1 mb-3 uppercase text-center align-middle text-[#c8a16e] font-extralight">
                        {props.caption}
                    </figcaption>
                    <PlusCircleIcon className="w-6 h-6 align-middle" />
                </div>
            </div>
        </figure>
    )
}

const Materials = props => {
    const [materialData, setMaterialData] = useState([]);
    const [materialGroupData, setMaterialGroupData] = useState([]);

    const fetchMaterialData = async () => {
        const response = await fetch("/api/material");
        const data = await response.json();

        setMaterialData(data);
    };

    const fetchMaterialGroupData = async () => {
        const response = await fetch("/api/materialGroup");
        const data = await response.json();

        setMaterialGroupData(data);
    };

    useEffect(() => {
        fetchMaterialData();
        fetchMaterialGroupData();
    }, []);

    const MaterialGroups = materialGroupData.map((materialGroup) => {
        return (
            <div className="font-light" key={materialGroup.name}>
                <div className="text-2xl text-[#c8a16e] uppercase py-5 text-center">
                    {materialGroup.name}
                </div>
                <div className="flex flex-wrap justify-center py-2">
                    {materialData.filter((item) =>
                        (item.materialGroup._id === materialGroup._id)).map((item) => {
                            return (<MaterialFigure
                                caption={item.name}
                                filename={item.image}
                                group={materialGroup.name}
                                materialCategoryId={materialGroup.materialCategoryId}
                                key={item.name}
                                handleClick={props.handleClick}
                            />)
                        })}
                </div>
            </div>
        )
    })

    return (
        <div className={`${props.className} fixed top-0 right-0 bottom-0 left-0 h-[100dvh] bg-[#00000080] z-[999]`} onClick={(e) => props.handleClose()}>
            <div className={`${props.className} absolute top-0 right-0 bottom-0 left-0 w-[100dvw] md:w-[400px] h-[100dvh]`}>
                <div className="flex flex-col h-full bg-no-repeat bg-[50%] bg-cover">
                    <div className="pointer-events-auto relative flex w-full flex-col border-none bg-[#1f1f21] bg-clip-padding text-current outline-none overflow-y-auto">
                        {MaterialGroups}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Materials