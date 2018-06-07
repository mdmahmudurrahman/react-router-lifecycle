import React from 'react';
import { Link } from 'react-router-dom';

const Posts = (props) => {
  const ids = [
    {id: '1', name: 'Post 1'}, 
    {id: '2', name: 'Post 2'}, 
    {id: '3', name: 'Post 3'}, 
  ]

  const list = ids.map(item => {
    return(
      <span key={item.id}>
        <Link to={{
          pathname: `${props.match.url}/${item.id}/${item.name}`
          }}>{item.name}</Link><br/>
      </span>
    )
  })

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

      <div>
        {
          list
        }
      </div>
    </div>
  )
}

export default Posts
