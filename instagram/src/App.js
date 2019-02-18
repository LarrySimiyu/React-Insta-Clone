import React, { Component } from 'react';

import SearchBar from './components/SearchBar';
import Post from './components/Post';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts: []
     }
  }
  render() { 
    return ( 
        <div className='container'>
            <SearchBar />
            <section className='section-post'>
              post list to be mapped
            </section>
        </div>
     );
  }
}
 
export default App;
