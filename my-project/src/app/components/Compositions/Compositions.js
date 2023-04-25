import React from 'react';
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
        <div className="bg-slate-200">
            Compositions
            <div className="grid md:grid-cols-3 mx-8">
                {CompositionFigures}
            </div>
        </div>
    )
}

export default Compositions