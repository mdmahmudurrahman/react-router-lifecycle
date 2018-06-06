import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profiles';
import PostItem from './components/post_item';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">Home</Link><br/>
          <Link to="/posts">Posts</Link><br/>
          <Link to={{
            pathname: '/profile'
          }}>Profile</Link><br/>
          <hr/>
        </header>
        <Switch>
          <Route path="/posts/:id/:username" component={PostItem} />
          <Route path="/posts" component={Posts} />
          <Route path="/profile" component={Profile} />
          <Route path="/" exact component={Home} />
          <Route render={() => <h3>Opps!! 404</h3>} />
        </Switch>  
      </div>  
    </BrowserRouter>
  )
}

ReactDOM.render(<App/>, document.querySelector('#root'))
