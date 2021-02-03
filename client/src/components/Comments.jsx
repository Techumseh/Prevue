import React from 'react';
import Link from 'react-router-dom';

const Comments = (props) => {
  const {comments} = props
  return (
    <div>
    {comments.map(comments => comments.name)}  
    </div>
  );
};

export default Comments;