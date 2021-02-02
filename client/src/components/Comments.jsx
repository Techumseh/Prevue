import React from 'react';

const Comments = (props) => {
  const {companies} = props
  return (
    <div>
    {comments.map(comments => comments.name)}  
    </div>
  );
};

export default Comments;