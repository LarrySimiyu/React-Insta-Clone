import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CommentSection from './CommentSection';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           

         }
    }

    render() { 
        const { thumbnail, username, image } = this.props; // same as this.props.thumbnail and so on - 
        return ( 
            <div>
                <img className='user-icon' src={thumbnail}/>
                <h1  className='user-name'>{username}</h1>
                <img className='post-image' src={image} />
                <CommentSection />
                
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