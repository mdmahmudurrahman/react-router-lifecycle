import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Profile = (props) => {
  console.log(props);

  const redirect = () => {
    // return <Redirect to="/" />
    // or
    return props.history.push('/')
  } 
  return(
    <div>
      <Link to={{
        pathname: `${props.match.url}/posts`
      }}>Take me to /profile/posts</Link>

      {redirect()}
    </div>
  )
}

export default Profile
