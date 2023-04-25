import React from 'react';

const Intro = props => {
  return (
    <figure className = "m-5">
        <figcaption className = "text-2xl">{props.title}</figcaption>
        {props.description}
    </figure>
  )
}

export default Intro