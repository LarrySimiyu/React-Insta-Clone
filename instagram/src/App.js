import React, { Component } from 'react';

import SearchBar from './components/SearchBar';
import dummyData from './dummy-data';
import Post from './components/Post';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      posts: dummyData,
      likes: 0 ,
      searchTerm: 'philzcoffee'
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
            {this.state.posts.map( post => (
              <Post thumbnail={post.thumbnail} username={post.username} image={post.image}/>
            ))}
              
            </section>
            <h1>{this.state.likes} likes</h1>
            <button onClick={this.handleLike}>LIKE</button>
            
        </div>
     );
  }
}
 
export default App;


