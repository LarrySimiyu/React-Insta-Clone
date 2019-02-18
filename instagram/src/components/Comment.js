import React, { Component } from 'react';
import PropTypes from 'prop-types';


const Comment = props => {
    return ( 
        <div>
            <p>Hello I am a Comment</p>
        </div>
     );
}
 
Comment.PropTypes={
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
};
export default Comment;
