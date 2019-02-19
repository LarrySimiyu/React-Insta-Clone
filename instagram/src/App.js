import React, { Component } from 'react';

import SearchBar from './components/SearchBar';
import dummyData from './dummy-data';
import Post from './components/Post';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts: [],
      likes: 0 
     }
  }

  componentDidMount() {
    // after the initial render, CDM runs one time only
    // perform initial data fetches here - update state with the fetched data
    console.log('CDM running');
    this.setState({ posts: dummyData });
  }

  handleLike = () => {
    this.setState({ likes: this.state.likes + 1 });
  }

  render() { 
    return ( 
        <div className='container'>
            <SearchBar />
            <section className='section-post'>
              <Post />
            </section>
            <button onClick={this.handleLike}>LIKE</button>
            <h1>{this.state.likes} likes</h1>
        </div>
     );
  }
}
 
export default App;
