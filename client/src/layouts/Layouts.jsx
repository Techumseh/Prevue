import React from 'react';
import {Link} from 'react-router-dom'

export default function Layout(props) {
  const { currentUser } = props
  return (
    <div>
      <header>
        <h1>Prevue</h1>
        {currentUser ? (
          <React.Fragment>
            <p>{currentUser.userName}</p>
            <button>SignOut</button>
          </React.Fragment>
        ) : (
       
            <Link to='/login'>SignIn/SignUp</Link>
            )}
      </header><hr />
      {currentUser && (
        <React.Fragment>
          <Link>Companies</Link>
          <Link>Comments</Link>
        </React.Fragment>
      )}
      {props.children}
    </div>
  );
};

// export default Layouts;