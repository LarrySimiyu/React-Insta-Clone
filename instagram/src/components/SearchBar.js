import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SearchBar
 extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchTerm : ''
         }
    }

    searchHandler = e => {
        e.preventDefault()
        this.props.search(this.state.searchTerm)

        this.setState({
            searchTerm: ''
        })
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() { 
        return ( 
            <header>
                <img className='logo' />
                <form onSubmit={this.searchHandler}>
                    <input className='search-bar'
                        onChange={this.handleInputChange} // always going to fire an event
                        placeholder='New Search'
                        value={this.state.searchTerm}
                        name="searchTerm"

                    />
                </form>
                
                <div className='icons'>
                    <img className='icon' />
                    <img className='icon' />
                    <img className='icon' />
                </div>
            </header>
         );
    }
}
 

 

SearchBar.propTypes = {
    posts: PropTypes.arrayOf( // passing in from App.js
        PropTypes.shape({
            thumbnail: PropTypes.string,
            username: PropTypes.string,
            image: PropTypes.string,
                comments: PropTypes.arrayOf({
                    text: PropTypes.string,
                    username: PropTypes.string
                })
        })
    )
};
export default SearchBar;