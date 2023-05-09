import Slider from "../Slider";
import Compositions from '../Compositions/Compositions';
import Modules from '../Modules';
import Materials from '../Materials/Materials';
import data from '../../data/collections.json';

const Collection = props => {
    const sliderData = data.find((collection) => {
        return (collection.collectionId == props.params.slug[0]);
    });

    const sliderGenerated = sliderData !== undefined ?
        [...new Array(sliderData.slideQty)].map((item, index) => {
            return {
                "image": ''.concat(...[
                    '/images/bathroom-furniture/collections/',
                    sliderData.collection,
                    '/slider/bathroom-furniture-collections-',
                    sliderData.collection,
                    '-slide-',
                    index < 9 ? '0' + (index + 1).toString() : (index + 1).toString(),
                    '.jpg']
                ),
                "id": (index + 1).toString(),
                "title" : props.params.slug[0],
            };
        }) : undefined;

    return (
        <section>
            {sliderGenerated && <Slider sliderData={sliderGenerated} />}
            <Compositions collectionId={props.params.slug[0]} />
            <Modules />
            <Materials />
        </section>
    )
}

export default Collection