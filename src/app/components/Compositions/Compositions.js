import data from "./../../data/collections.json";
import CompositionFigure from "./CompositionFigure";

const Compositions = props => {
    const CompositionFigures = data.find((collection) => {return (collection.collectionId == props.collectionId)}).compositions.map((obj) => {
        return (
            <CompositionFigure
                key={obj.compositionId}
                caption={obj.title}
                description={obj.title}
                filename={obj.image}
                link={['bathroom-furniture/',props.collectionId, '/', obj.compositionId].join('')}
            />
        )
    });

    return (
        <section className="bg-[#3a3a3e] pb-10">
            <div className="text-2xl text-[#c8a16e] uppercase px-2 pt-5 text-center md:text-4xl md:p-10 font-extralight">Compositions {props.collectionId}</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-8">
                {CompositionFigures}
            </div>
        </section>
    )
}

export default Compositions