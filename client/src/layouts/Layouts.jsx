import React from 'react';
import { Link } from 'react-router-dom'


export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <h1>pre:vue </h1><h3>check it out before you check it out</h3>
        {currentUser ? (
          <React.Fragment>
            <p>{currentUser.userName}</p>
            <button onClick={handleLogout}>Sign Out</button>
          </React.Fragment>
        ) : (
       
            <Link to='/login'>SignIn/SignUp</Link>
            )}
      
      </header>
      {currentUser && (
        <React.Fragment>
          <Link to='/companies'>Companies </Link>
          <Link to ='/comments'>Comments</Link>
        </React.Fragment>
      )}
        {props.children}
      
    </div>
    
  );
};

