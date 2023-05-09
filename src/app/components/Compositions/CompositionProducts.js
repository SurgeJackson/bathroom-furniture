import Image from "next/image";

const CompositionProduct = (props) => {
    return (
        <div className="flex flex-col md:flex-row gap-5 justify-evenly items-center mx-10 py-5 border-b-[1px] border-solid border-[#ffffff1a] last:border-b-0 break-words">
            <div className="flex flex-row gap-5 justify-evenly items-center md:w-[35%]">
                <Image className="invert-[80%] w-1/2 max-w-full rounded-lg" src={props.product.image} width={250} height={250} alt={props.product.article}
                // style={{filter : "invert(68%) sepia(41%) saturate(377%) hue-rotate(354deg) brightness(91%) contrast(87%); "}}
                />
                <Image className="w-1/2 max-w-full rounded-lg" src={props.product.material} width={250} height={250} alt={props.product.materialName}/>
            </div>
            <div className="flex flex-row gap-5 justify-evenly items-center md:w-[65%] pr-5 text-center">
                <div className="w-[30%]">
                    <p className="pt-1 text-base font-semibold uppercase">{props.product.article}</p>
                    <p className="pt-1 text-xs">{props.product.materialName}</p>
                </div>
                <div className="w-[40%]">{props.product.name}</div>
                <div className="w-[15%]">{props.product.qty}</div>
                <div className="w-[15%] text-right">
                    {props.product.total.toLocaleString()} р.
                </div>
            </div>
        </div>
    )
}


const CompositionProducts = props => {
    let total = 0;
    return (
        <section className="bg-[#454449] pb-10 font-extralight text-sm text-clip">
            <div className="text-xl md:text-2xl text-center p-5 font-extralight tracking-widest uppercase text-[#c8a16e]">Состав композиции {props.title}</div>
            <div className="max-w-[90%] mx-auto my-0">
                <div className="bg-[#3a3a3e] rounded-t-xl">
                    {props.products && props.products.map((obj) => {
                        total += obj.total;
                        return (
                            <CompositionProduct
                                product={obj}
                                key={obj.id}
                            />
                        )
                    })}
                </div>
                <div className="flex flex-row justify-between items-center bg-[#1f1f21] rounded-b-xl p-10 font-extralight tracking-widest text-right text-[#c8a16e] text-lg">
                    <div className="uppercase" >Итого</div>
                    <div className="" >{total.toLocaleString()}  р.</div>
                </div>
            </div>
        </section>
    )
}

export default CompositionProducts