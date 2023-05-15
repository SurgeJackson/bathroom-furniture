"use client";

import data from "../../data/modules.json";
import Image from "next/image";
import { PlusCircleIcon, MinusCircleIcon, PaintBrushIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Materials from "./Materials";

const Module = props => {
    const module = props.type == "list" ? props.module : props.module;

    return (
        <div>
            {props.type == "list" ?
                <div className="flex flex-row gap-1 justify-evenly items-center mx-5 border-b-[1px] border-solid border-[#ffffff1a] last:border-b-0 break-words">
                    <div className="flex flex-row gap-1 justify-evenly items-center md:w-[35%]">
                        {module.image}
                        {/* <Image className="invert-[80%] w-1/2 max-w-full rounded-lg" src={props.product.image} width={250} height={250} alt={props.product.article}
                        /> */}
                    </div>
                    <div className="flex flex-row gap-1 justify-evenly items-center w-[65%] text-center">
                        <div className="w-[30%]">
                            <p className="pt-1 text-base font-semibold uppercase">{module.article}</p>
                        </div>
                        <div className="w-[40%]">{module.name}</div>
                        <div className="w-[30%]">{module.description}</div>
                        <PlusCircleIcon className="w-10 h-10 cursor-pointer active:scale-90 hover:text-white transition-colors duration-500" onClick={(e) => props.handleClick(props.module)} />
                    </div>
                </div>
                :
                <div className="flex flex-col">
                    <div className="flex flex-row gap-1 justify-evenly items-center mx-5 border-b-[1px] border-solid border-[#ffffff1a] last:border-b-0 break-words" >
                        <div className="flex flex-row gap-1 justify-evenly items-center md:w-[35%]">
                            {module.image}
                        </div>
                        <div className="flex flex-row gap-1 justify-evenly items-center w-[65%] text-center">
                            <div className="w-[30%]">
                                <p className="pt-1 text-base font-semibold uppercase">{module.article}</p>
                            </div>
                            <div className="w-[40%]">{module.name}</div>
                            <div className="w-[30%]">{module.description}</div>
                            <MinusCircleIcon className="w-10 h-10 cursor-pointer active:scale-90 hover:text-white transition-colors duration-500" onClick={(e) => props.handleClick(props.module.id)} />
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 justify-start items-center">
                        {module.materials.map((obj) => {
                            return (
                                <div className="flex flex-col justify-center items-center" onClick={(e) => props.handleEditClick(props.module.id, obj.moduleMaterialId)} key={obj.moduleMaterialId} >
                                    <div>
                                        {obj?.materialId ?
                                            <figure className="flex flex-col items-center justify-evenly p-1">
                                                <div className="relative w-[95px] h-[95px] md:w-[200px] md:h-[200px] rounded-xl" style={{ backgroundImage: `url(${obj.materialImage})` }}>
                                                    <div className="flex flex-col items-center rounded-xl transition-all duration-300 justify-center absolute opacity-0 hover:opacity-100 w-full h-full hover: bg-[#00000080] cursor-pointer">
                                                        <figcaption className="text-xl px-1 mb-3 uppercase text-center align-middle text-[#c8a16e] font-extralight">
                                                            {obj.materialId}
                                                        </figcaption>
                                                    </div>
                                                </div>
                                            </figure>
                                            : <QuestionMarkCircleIcon className="w-10 h-10" />}
                                    </div>
                                    <div>
                                        {obj.moduleMaterialType}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
        </div>
    )
}

const Modules = props => {
    return (
        <div className="m-0">
            <div className="bg-[#3a3a3e] rounded-t-xl">
                {props.data.map((obj) => {
                    return (
                        <Module
                            module={obj}
                            key={obj.id ? obj.id : obj.moduleId}
                            type={props.type}
                            handleClick={props.handleClick}
                            handleEditClick={props.handleEditClick}
                        />
                    )
                })}
            </div>
        </div>
    )
}


const CompositionConfigurator = props => {
    const [selectedModules, setSelectedModules] = useState([]);
    const [showMaterialSelect, setShowMaterialSelect] = useState(false);
    const [editModuleId, setEditModuleId] = useState("");
    const [editModuleMaterialId, setEditModuleMaterialId] = useState("");

    const handlePlusClick = (module) => {
        setSelectedModules(modules => [...modules, { ...module, id: `${modules.length}` }
        ])
    }

    const handleMinusClick = (id) => {
        setSelectedModules(
            selectedModules.filter(module =>
                module.id !== id
            )
        );
        setShowMaterialSelect(false);
    }

    const handleEditClick = (id, editMaterialId) => {
        setShowMaterialSelect(true);
        setEditModuleId(id);
        setEditModuleMaterialId(editMaterialId);
    }

    const handleMaterialClick = (data) => {
        setSelectedModules(
            selectedModules.map((module) =>
                module.id === editModuleId
                    ? {
                        ...module,
                        materials: module.materials.map((material) =>
                            material.moduleMaterialId === editModuleMaterialId
                                ? {
                                    ...material,
                                    materialId: `${data.caption}`,
                                    materialGroupId: `${data.group}`,
                                    materialImage: `${data.filename}`
                                }
                                : { ...material }),
                    }
                    : { ...module }
            )
        );

        setShowMaterialSelect(false);
    }

    return (
        <div className="pt-20">CompositionConfigurator
            <div className="flex flex-row gap-0">
                <div className="pt-10 w-1/2">
                    Modules
                    <Modules
                        data={data}
                        type="list"
                        handleClick={handlePlusClick}
                    />
                </div>
                <div className="pt-10 w-1/2">
                    Selected Modules
                    <Modules
                        data={selectedModules}
                        type="selected"
                        handleClick={handleMinusClick}
                        handleEditClick={handleEditClick}
                    />
                </div>
            </div>
            {showMaterialSelect &&
                <div className="w-full">
                    Materials - {editModuleId}
                    <Materials handleClick={handleMaterialClick} />
                </div>}
        </div>
    )
}

export default CompositionConfigurator