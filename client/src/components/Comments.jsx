import React from 'react';

const Comments = (props) => {
  const {comments} = props
  return (
    <div>
    {comments.map(comments => comments.name)}  
    </div>
  );
};

export default Comments;