"use client";

import data from "../../data/modules.json";
import Image from "next/image";
import { PlusCircleIcon, QuestionMarkCircleIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Materials from "./Materials";

const Module = props => {
    const module = props.type == "list" ? props.module : props.module;

    const List = () => {
        return (
            <div className="flex flex-row gap-1 justify-evenly items-center py-1 mx-5 border-b-[1px] border-solid border-[#ffffff1a] break-words hover:bg-[#454449] transition-colors duration-500 cursor-pointer" onClick={(e) => props.handleClick(props.module)}>
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
                    <PlusCircleIcon
                        className="w-10 h-10 cursor-pointer active:scale-90 hover:text-white transition-colors duration-500"
                    // onClick={(e) => props.handleClick(props.module)}
                    />
                </div>
            </div>
        )
    }

    const SelectedList = () => {
        return (
            <div className="flex flex-row gap-1 justify-evenly items-center py-1 mx-5 border-b-[1px] border-solid border-[#ffffff1a] break-words hover:bg-[#454449] transition-colors duration-500">
                <div className="w-[30%] flex flex-row gap-1 justify-start items-start break-words">
                    {module.materials?.map((obj) => {
                        return (
                            <div className="flex flex-col justify-start items-center" onClick={(e) => props.handleEditClick(props.module.id, obj.moduleMaterialId)} key={obj.moduleMaterialId}>
                                <figure className="flex flex-col items-center justify-evenly">
                                    {obj?.materialId ?
                                        <div className="relative w-[95px] h-[95px] rounded-xl" style={{ backgroundImage: `url(${obj.materialImage})` }}>
                                            <div className="flex flex-col items-center rounded-xl transition-all duration-300 justify-center absolute opacity-0 hover:opacity-100 w-full h-full hover: bg-[#00000080] cursor-pointer">
                                                <figcaption className="text-xs uppercase text-center align-middle text-[#c8a16e] font-extralight">
                                                    {obj.materialId}
                                                </figcaption>
                                            </div>
                                        </div>
                                        : <QuestionMarkCircleIcon className="w-[95px] h-[95px] cursor-pointer stroke-[1]" />}
                                </figure>
                                <div className="text-xs text-center pt-1">
                                    {obj.moduleMaterialType}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="w-[70%] flex flex-row gap-1 justify-start items-center mx-5 border-b-[1px] border-solid border-[#ffffff1a] last:border-b-0 break-words" >
                    <div className="w-[15%]">
                        {module.image}
                    </div>
                    <div className="w-[20%]">
                        <p className="pt-1 text-base font-semibold uppercase">{module.article}</p>
                    </div>
                    <div className="w-[20%]">{module.name}</div>
                    <div className="w-[15%]">{module.description}</div>
                    <div className="w-[15%]">
                        {module.price}
                    </div>
                    <div className="w-[15%]">
                        <TrashIcon
                            className="w-8 h-8 cursor-pointer active:scale-90 hover:text-white transition-colors duration-500"
                            onClick={(e) => props.handleClick(props.module.id)} />
                    </div>
                </div>
            </div>
        )
    }

    return props.type == "list" ? <List /> : <SelectedList />;
}

const Modules = props => {
    return (
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
                                    materialImage: `${data.filename}`,
                                    materialCategoryId: `${data.materialCategoryId}`
                                }
                                : { ...material }),
                        price: module.prices.filter((priceItem) => priceItem.materialCategoryId === data.materialCategoryId)[0]?.price,
                    }
                    : { ...module }
            )
        );

        setShowMaterialSelect(false);
    }

    const handleMaterialClose = () => {
        setShowMaterialSelect(false);
    }

    return (
        <div className="pt-20 text-sm">
            CompositionConfigurator
            <div className="flex flex-row gap-0 text-center justify-stretch">
                <div className="py-1 w-1/2">
                    Modules
                    <Modules
                        data={data}
                        type="list"
                        handleClick={handlePlusClick}
                    />
                </div>
                <div className="pt-1 w-1/2">
                    <div className="flex flex-row justify-center gap-3 items-center">
                        Selected Modules
                        <TrashIcon className="w-6 h-6 cursor-pointer"
                            onClick={(e) => setSelectedModules([])} />
                    </div>
                    <Modules
                        data={selectedModules}
                        type="selected"
                        handleClick={handleMinusClick}
                        handleEditClick={handleEditClick}
                    />
                </div>
            </div>
            <Materials className={`${showMaterialSelect ? "" : "hidden"}`}
                handleClick={handleMaterialClick}
                handleClose={handleMaterialClose}
            />
        </div>
    )
}

export default CompositionConfigurator