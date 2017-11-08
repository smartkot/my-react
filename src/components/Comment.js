import React from 'react';
import PropTypes from 'prop-types';


function Comment({comment}) {
    return (
        <p>{comment.text} by <strong>{comment.user}</strong></p>
    );
}

Comment.propTypes = {
  comment: PropTypes.shape({
      user: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
  }).isRequired
};

export default Comment;