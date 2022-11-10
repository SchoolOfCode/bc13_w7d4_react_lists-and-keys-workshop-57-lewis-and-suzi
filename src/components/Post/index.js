import React from 'react';

import './index.css';

function Post(props) {
  return <article>
  <h2>{props.title}</h2>
    <p>{props.date}</p>
    <p>{props.author}</p>
    <p>{props.text}</p>
    <p>{props.highlights}</p>
    <img src={props.image.link} alt={props.image.alt}></img>
  </article>
}

export default Post;
