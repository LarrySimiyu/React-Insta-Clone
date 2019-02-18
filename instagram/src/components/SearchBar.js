import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = props => {
    return ( 
        <header>
            <img className='logo' />
            <input className='search-bar' />
            <div className='icons'>
                <img className='icon' />
                <img className='icon' />
                <img className='icon' />
            </div>
        </header>
     );
}
 
SearchBar.PropTypes = {
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