'use client'

import React from 'react';
import Slider from '../Slider';
import Intro from '../Intro';
import data from '../../data/collections.json';
import Features from '../Features/Features';
import ColorPalette from './ColorPalette';

import dynamic from 'next/dynamic';

const InteractiveImage = dynamic(
  () => import('../../components/InteractiveImage'),
  { loading: () => <p>...</p>, ssr: false }
);

const Composition = props => {
  const hero = data.find((collection) => {
    return (collection.collectionId == props.params.slug[0]);
  }).compositions.find((composition) => {
    return (composition.compositionId == props.params.slug[1]);
  });

  return (
    <div>Composition {props.params.slug}
      <Slider sliderData={[{ "image": hero.heroImage ? hero.heroImage : hero.image, "id": "01" }]} />
      <Intro title={hero.heroTitle} description={hero.description} />
      <Features />
      <ColorPalette image={hero.image} />
      {/* <InteractiveImage/> */}
    </div>
  )
}

export default Composition