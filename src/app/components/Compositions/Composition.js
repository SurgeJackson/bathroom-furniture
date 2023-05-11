import Slider from '../Slider';
import Intro from '../Intro';
import data from './../../data/collections.json';
import Features from '../Features/Features';
import ColorPalette from './ColorPalette';
import InteractiveImage from '../InteractiveImage/InteractiveImage';
import CompositionProducts from './CompositionProducts';

const Composition = props => {
  const hero = data.find((collection) => {
    return (collection.collectionId == props.params.slug[0]);
  })?.compositions.find((composition) => {
    return (composition.compositionId == props.params.slug[1]);
  });

  const title = hero.heroTitle ? hero.heroTitle : hero.title;
  const image = hero.heroImage ? hero.heroImage : hero.image;

  return (
    <section className="bg-[#3a3a3e]">
      <Slider sliderData={[{ 
        "image": image,
        "id": "01",
        "title": title}]} />
      
      <Intro title={title} description={hero.description} />

      {hero.features &&
      <Features title={title} data={hero.features}/>}

      {hero.products &&
      <InteractiveImage image={image} hotSpotsData={hero.products} title={title}/>}
      
      {hero.products && 
      <CompositionProducts title={title} products={hero.products}/>}
      
      <ColorPalette image={image} title={title}/>
    </section>
  )
}

export default Composition