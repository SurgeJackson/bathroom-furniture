'use client'
import React from 'react';
import FeatureFigure from './FeatureFigure';

const data = [
  {
    "image": "https://sturmproject.ru/image/catalog/bathroom-furniture/d-art/bathroom-furniture-collections-d-art-slide-01.jpg",
    "id": "01",
    "caption": "Chauncey",
    "description": "Minim culpa nisi consectetur laboris magna Lorem elit deserunt aliqua labore. Qui occaecat tempor incididunt ex velit officia pariatur nulla deserunt occaecat sit voluptate. Elit ipsum laborum amet consectetur cupidatat aute non mollit. Eiusmod eu nulla commodo tempor commodo consectetur elit do cillum.",
  },
  {
    "image": "https://sturmproject.ru/image/catalog/bathroom-furniture/d-art/bathroom-furniture-collections-d-art-slide-02.jpg",
    "id": "02",
    "caption": "Murray",
    "description": "Non deserunt est duis anim ut Lorem nulla commodo consectetur Lorem. Dolor ut culpa enim est reprehenderit excepteur amet ullamco Lorem culpa in veniam ut quis. Commodo esse labore irure incididunt irure magna in."
  },
  {
    "image": "https://sturmproject.ru/image/catalog/bathroom-furniture/d-art/bathroom-furniture-collections-d-art-slide-03.jpg",
    "id": "03",
    "caption": "Lefty and Ginger",
    "description": "Aliquip nulla laboris excepteur nisi ullamco laborum cupidatat enim esse sint amet. Occaecat do deserunt consequat amet. Culpa ipsum proident reprehenderit eiusmod sunt quis occaecat magna incididunt dolor in labore amet id."
  },
  {
    "image": "https://sturmproject.ru/image/catalog/bathroom-furniture/d-art/bathroom-furniture-collections-d-art-slide-04.jpg",
    "id": "04",
    "caption": "Getty and Setty",
    "description": "Duis quis incididunt eiusmod occaecat esse excepteur amet aliqua labore Lorem. Quis duis laboris incididunt quis aliqua deserunt nulla. Anim nulla ipsum qui eu enim commodo fugiat tempor eiusmod id magna."
  },
];

const Features = () => {
  return (
    <div className="bg-slate-400">Features
      {data.map((obj) => {
        return (
          <FeatureFigure
            filename={obj.image}
            caption={obj.caption}
            description={obj.description}
            key={obj.id}
          />
        )
      })}
    </div>
  )
}

export default Features