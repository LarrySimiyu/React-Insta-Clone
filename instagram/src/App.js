import React, { Component } from 'react';
import PostsPage from './components/PostsPage'
import Authenticate from './components/Authenticate';
import Login from './components/Login';


class App extends Component {

  render() { 
    return(
      <PostsPage />
    )
    
  }
  }
 
export default Authenticate(App);


