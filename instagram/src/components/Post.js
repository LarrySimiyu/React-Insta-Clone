import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentSection from './CommentSection';

class Post extends Component { // whenever in class component this. has to be next to props this.props
    constructor(props) {
        super(props);
        
    }

   
    render() { 

        console.log(this.props)
        const { thumbnailUrl, username, imageUrl , likes, comments} = this.props.post; // same as this.props.thumbnail and so on - destructuring 
        return ( 
            <div>
                <img className='user-icon' src={`${thumbnailUrl}`}/>
                {/* load username onto the screen */}
                <h1  className='user-name'>{username}</h1> 
                <img className='post-image' src={imageUrl} />
                {comments.map( comment => {
                   return (
                       <div>
                           <h3>{comment.username}</h3> 
                           <p>{comment.text}</p>
                       </div>
                   ) 
                })}
                <CommentSection />
                <h1 className='likes'>{likes}</h1>
                <button onClick= {this.props.handleLike}>LIKES</button>
                
                
            </div>
         );
    }
}
 
Post.propTypes = {
    post: PropTypes.shape({
        thumbnail: PropTypes.string,
        username: PropTypes.string,
        image: PropTypes.string,
        
    })
};
export default Post;