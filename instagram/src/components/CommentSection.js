import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments: []
         }
    }
    render() { 
        return ( 
            <div>
                <h1>LIST OF COMMENTS</h1>
            </div>
         );
    }
}
 
CommentSection.propTypes={
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string
        })
    )
};
export default CommentSection;