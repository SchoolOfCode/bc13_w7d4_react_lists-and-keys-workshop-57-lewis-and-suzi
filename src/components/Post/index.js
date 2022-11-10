import React from 'react';

import './index.css';

function Post(props) {
  return <article>
  <h2>{props.title}</h2>
  <p>{props.date}</p>
  <p>{props.author}</p>
  <p>{props.text}</p>
  <p>{props.highlights}</p>
  </article>
}

export default Post;
