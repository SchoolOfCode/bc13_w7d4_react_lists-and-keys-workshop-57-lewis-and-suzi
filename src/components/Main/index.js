import React, { useState } from 'react';

import './index.css';

import samplePosts from '../../libs/data';

import Post from '../Post';

function Main() {
  const [posts, setPosts] = useState(samplePosts);
  return <main id="main">
  {posts.map(({ postId, title, date, author, text }) => {
    //console.log(postId)
    return <Post key={ postId } title={title} date={date} author={author} text={text} />
  })}
  </main>;
}

export default Main;
