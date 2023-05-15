import materialData from "../Materials/data.json"
import { PlusCircleIcon } from '@heroicons/react/24/outline';

const MaterialFigure = props => {
    return (
        <figure className="flex flex-col items-center justify-evenly p-1" onClick={(e) => props.handleClick(props)}>
            <div className="relative w-[95px] h-[95px] md:w-[200px] md:h-[200px] rounded-xl" style={{ backgroundImage: `url(${props.filename})` }}>
                <div className="flex flex-col items-center rounded-xl transition-all duration-300 justify-center absolute opacity-0 hover:opacity-100 w-full h-full hover: bg-[#00000080] cursor-pointer">
                    <figcaption className="text-xl px-1 mb-3 uppercase text-center align-middle text-[#c8a16e] font-extralight">
                        {props.caption}
                    </figcaption>
                    <PlusCircleIcon className="w-10 h-10 align-middle" />
                </div>
            </div>
        </figure>
    )
}

const Materials = props => {
    const MaterialGroups = materialData.map((obj) => {
        return (
            <div className="font-light" key={obj.name}>
                <div className="text-3xl text-[#c8a16e] uppercase py-5 text-center">
                    {obj.name}
                </div>
                <div className="flex flex-wrap justify-center py-2">
                    {obj.items.map((item) => {
                        return (<MaterialFigure
                            caption={item.name}
                            filename={item.image}
                            group={obj.name}
                            key={item.name}
                            handleClick={props.handleClick}
                        />)
                    })}
                </div>
            </div>
        )
    })

    return (
        <section className={"bg-[#454449]"}>
            <div className="px-10">
                {MaterialGroups}
            </div>
        </section>
    )
}

export default Materials