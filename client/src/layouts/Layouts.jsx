import React from 'react';
import {Link} frim 'react-router-dom'

const Layouts = () => {
  return (
    <div>
      <header>
        <h1>Prevue</h1>
        <Link to='/login'>SignIn/SignUp</Link>
      </header>
      {props.children}
    </div>
  );
};

export default Layouts;