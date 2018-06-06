import React from 'react';
import { Link } from 'react-router-dom';

const Posts = (props) => {
  return(
    <div>
      <p><Link to={{
        pathname: `${props.match.url}/1` 
      }}>Post 1</Link></p>
      <p><Link to={{
        pathname: `${props.match.url}/2`
      }}>Post 2</Link></p>
      <p><Link to={{
        pathname: `${props.match.url}/3`
      }}>Post 3</Link></p>
    </div>
  )
}

export default Posts
