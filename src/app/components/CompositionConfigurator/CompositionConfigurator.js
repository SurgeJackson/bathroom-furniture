"use client";

import data from "../../data/modules.json";
import Image from "next/image";
import { PlusCircleIcon, QuestionMarkCircleIcon, TrashIcon, ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Materials from "./Materials";

const uniqueGroups = [...new Map(data.map(v => [v.image, v])).values()]
let dataFiltered = [...data]

const Module = props => {
    const module = props.type == "list" ? props.module : props.module;

    const Groups = () => {
        return (
            <div className="flex flex-row gap-1 justify-evenly items-center py-1 mx-5 break-words transition-all duration-500 cursor-pointer active:scale-95" onClick={(e) => props.handleClick(props.module)}>
                <Image className="invert-[80%] hover:invert transition-all duration-500  w-28 max-w-full" src={module.image} width={250} height={250} alt={module.article} />
            </div>
        )
    }
    const List = () => {
        return (
            <div className="flex flex-row gap-1 justify-evenly items-center py-1 mx-5 border-b-[1px] border-solid border-[#ffffff1a] break-words hover:bg-[#454449] transition-all duration-500 cursor-pointer active:scale-95" onClick={(e) => props.handleClick(props.module)}>
                <div className="flex flex-row gap-1 justify-evenly items-center w-[20%]">
                    <Image className="invert-[80%] w-28 max-w-full" src={module.image} width={250} height={250} alt={module.article} />
                </div>
                <div className="flex flex-row gap-1 justify-evenly items-center w-[80%] text-center">
                    <div className="w-[30%]">
                        <p className="pt-1 text-base font-semibold uppercase">{module.article}</p>
                    </div>
                    <div className="w-[70%]">{module.name} {module.size.l}x{module.size.p}x{module.size.h}</div>
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
                <div className="w-[15%] flex flex-row gap-1 justify-start items-start break-words">
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
                <div className="w-[85%] flex flex-row gap-2 justify-start items-center mx-5 border-b-[1px] border-solid border-[#ffffff1a] last:border-b-0 break-words" >
                    <div className="w-[25%]">
                        <Image className="invert-[80%] w-28 max-w-full" src={module.image} width={250} height={250} alt={module.article} />
                    </div>
                    <div className="w-[15%]">
                        <p className="pt-1 text-base font-semibold uppercase">{module.article}</p>
                    </div>
                    <div className="w-[30%]">{module.name}</div>
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

    return (props.showGroups ? <Groups /> : props.type == "list" ? <List /> : <SelectedList />);
}

const Modules = props => {
    return (
        <div className="bg-[#3a3a3e] flex flex-row flex-wrap">
            {props.data.map((obj) => {
                return (
                    <Module
                        module={obj}
                        key={obj.id ? obj.id : obj.moduleId}
                        type={props.type}
                        handleClick={props.handleClick}
                        handleEditClick={props.handleEditClick}
                        showGroups={props.showGroups}
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
    const [showGroups, setShowGroups] = useState(true);

    const handlePlusClick = (module) => {
        showGroups
            ? (setShowGroups(false), dataFiltered = data.filter((item) => (item.image === module.image))) : setSelectedModules(modules => [...modules, { ...module, id: `${modules.length}` }
            ]);
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
        <div className="pt-20 text-sm py-10 pl-5">
            CompositionConfigurator
            <div className="flex flex-row gap-0 text-center justify-stretch">
                <div className="py-1 w-1/2 border-[1px] border-solid border-[#ffffff1a] shadow-[0_35px_60px_-15px_rgba(0,0,0,1)]">
                    Modules
                    {showGroups ? <></> : <ArrowLeftCircleIcon className="w-6 h-6 cursor-pointer" onClick={(e) => setShowGroups(true)} />}
                    <Modules
                        data={showGroups ? uniqueGroups : dataFiltered}
                        type="list"
                        handleClick={handlePlusClick}
                        showGroups={showGroups}
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