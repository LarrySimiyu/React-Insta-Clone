import React, { Component } from "react";
import PropTypes from "prop-types";

const Comment = props => {
  return (
    <div>
      <p>{props.username}</p>
      <p>{props.text}</p>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};
export default Comment;
