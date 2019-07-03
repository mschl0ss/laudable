import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    // debugger;
    const display = props.currentUser ? (
        <div>
            <h3>Logged In</h3>
            <p>wutup {props.currentUser.username}</p>
            <button onClick={props.logout}>Log Out</button>
        </div>
    ) :
     (
        <div>
            <h3>Logged Out </h3>
            <Link className="btn" to="/signup">Sign Up</Link>
            <Link className="btn" to="/login">Log In</Link>
        </div>
    );

  
    return (
        <header className="nav-bar">
            <h3 className="logo">oh lawd-able NAVBAR</h3>
            <div>
                {display}
            </div>
        </header>
    );
};