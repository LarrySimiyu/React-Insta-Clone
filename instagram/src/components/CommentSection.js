import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments: [],
            newComment: ''
         }
    }

    addNewComment = event => { //update the comments array
        console.log(this.state)
        event.preventDefault(); //prevents screen from reloading

        this.setState({
            comments: [...this.state.comments, this.state.newComment], // copying this.state.comments and adding newComment to the end
            newComment: '' 
        })

    }

    handleChange = event => { //update changes in newComment string
        this.setState({
            newComment: event.target.value
        })
    }

    render() { 
        return ( 
            <div>
                {this.state.comments.map( comment => ( //implicit return 
                    <div>
                        <h3>Larry</h3>
                        <p>{comment}</p>
                    </div>
                ))}
                <form onSubmit={this.addNewComment}>
                    <input 
                        onChange={this.handleChange} // always going to fire an event
                        placeholder='New Comment'
                        value={this.state.newComment} // value text inside of the input
                        name="comments"
                    />
                    <button type='submit'>Add Comment</button>
                </form>
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