import React from 'react';
import { Link } from 'react-router-dom'
import './Layouts.css'
import Nav from "../components/Nav"


export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="home-container" >
      <header className="header-div">
        <h1 className= "header">pre:vue check it out before you check it out</h1><br />
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

