import React from 'react';
import { Link } from 'react-router-dom';

const Posts = (props) => {
  return(
    <div>
      <p><Link to={{
        pathname: `${props.match.url}/1/test` 
      }}>Post 1</Link></p>
      <p><Link to={{
        pathname: `${props.match.url}/2/best`
      }}>Post 2</Link></p>
      <p><Link to={{
        pathname: `${props.match.url}/3/lest`
      }}>Post 3</Link></p>
    </div>
  )
}

export default Posts
