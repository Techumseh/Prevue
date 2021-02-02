import React from 'react';
import {Link} from 'react-router-dom'

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <h1>Prevue</h1>
        {currentUser ? (
          <React.Fragment>
            <p>{currentUser.userName}</p>
            <button onClick={handleLogout}>Sign Out</button>
          </React.Fragment>
        ) : (
       
            <Link to='/login'>SignIn/SignUp</Link>
            )}
      </header>
      <hr />
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

