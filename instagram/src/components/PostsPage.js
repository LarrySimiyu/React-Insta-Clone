import React, { Component } from "react";

import SearchBar from "./SearchBar";
import dummyData from "../dummy-data";
import Post from "./Post";

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: dummyData,
      
      filteredPosts: []
    };
  }

  componentDidMount() {
    // after the initial render, CDM runs one time only
    // perform initial data fetches here - update state with the fetched data
    console.log("CDM running");

    this.fetchPosts();
  }

  fetchPosts = () => {
    this.setState({ posts: dummyData });
  };

  handleLike = timestamp => { // increment likes of the post that has that time stamp
    console.log(timestamp); 
        this.setState({
            posts: [...this.state.posts.map( post => { //this.state to get reference once inside no need for this.state
                if( post.timestamp === timestamp) {
                    return ( {...post, likes: post.likes + 1}
                    )
                } else {
                    return ( post )
                }
            })]
        })

  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  search = searchTerm => {
    // console.log(searchTerm);
    // console.log(this.state.posts.username);
    const filtered = this.state.posts.filter(post => {
      console.log(post.username);
      return post.username.includes(searchTerm);
    });

    console.log(filtered);
    this.setState({
      filteredPosts: filtered
    });
  };

  render() {
    const { filteredPosts, posts } = this.state;

    if (filteredPosts.length > 0) {
      return (
        <div className="container">
          <SearchBar
            search={this.search}
            inputChange={this.handleInputChange}
          />

          <section className="section-post">
            {this.state.filteredPosts.map((post, index) => (
              <Post
                post={post}
                key={post.timestamp}
                handleLike={this.handleLike}
              />
            ))}
          </section>
        </div>
      );
    } else {
      return (
        <div className="container">
          <SearchBar
            search={this.search}
            inputChange={this.handleInputChange}
          />

          <section className="section-post">
            {this.state.posts.map((post, index) => (
              <Post
                post={post}
                key={post.timestamp}
                handleLike={this.handleLike}
              />
            ))}
          </section>
        </div>
      );
    }
  }
}

export default PostPage;
