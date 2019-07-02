import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <p>wutup {currentUser.username}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    ) :
     (
        <div>
            <Link className="btn" to="/signup">Sign Up</Link>
            <Link className="btn" to="/login">Log In</Link>
        </div>
    );
  
    return (
        <header className="nav-bar">
            <h3 className="logo">oh lawd-able</h3>
            <div>
                {display}
            </div>
        </header>
    );
};