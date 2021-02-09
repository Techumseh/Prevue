import React from 'react';
import { Link } from 'react-router-dom'
import './Layouts.css'
import Nav from "../components/Nav"


export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div className="home-container" >
      <header className="header"><a href="/"><img src="https://i.imgur.com/wLpR0Xt.png" width="100" height='100'></img></a>
        <div >check it out before you check it out</div>
        {currentUser ? (
          <React.Fragment>
            <div>{currentUser.userName}</div>
            <button className="button" onClick={handleLogout}>Sign Out</button>
          </React.Fragment>
        ) : (
       
            <Link className="button2" to='/login'><button>Sign In/Sign Up</button></Link>
            )}
      <div className="header-div"/>
      </header>
      {currentUser && (
        <React.Fragment>
          <Link to='/companies'>Browse Companies </Link>
 
        </React.Fragment>
      )}
        {props.children}
      
    </div>  
  );
  
};

