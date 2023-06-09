import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const MaterialFigure = props => {
    return (
        <figure className="flex flex-col items-center justify-evenly p-1">
            <div className="relative w-[95px] h-[95px] md:w-[200px] md:h-[200px] rounded-xl" style={{ backgroundImage: `url(${props.filename})` }}>
                <a className="spotlight" href={props.filename} data-lightbox={props.group}>
                    <div className="flex flex-col items-center rounded-xl text-white transition-all duration-300 justify-center absolute opacity-0 hover:opacity-100 w-full h-full hover: bg-[#00000080] ">
                        <figcaption className="text-xl px-1 mb-3 uppercase text-center align-middle text-[#c8a16e] font-extralight">
                            {props.caption}
                        </figcaption>
                        <MagnifyingGlassIcon className="w-5 h-5 align-middle" />
                    </div>
                </a>
            </div>
        </figure>
    )
}

export default MaterialFigure