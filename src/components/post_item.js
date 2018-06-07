import React from 'react';

const PostItem = (props) => {
  return(
    <div>
      <h2>User id: {props.match.params.id} 
      and user name: {props.match.params.username}</h2>
    </div>
  )
}

export default PostItem