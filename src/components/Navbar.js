import React, {useState} from 'react';
// useStategit is a Hook that lets you add React state to function components
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <>
        <nav className="navbar">
            <div className=".navbar-container">
                <Link to="/" className="navbar-logo">
                  DCT <i class="fab fa-wolf-pack-battalion"></i>
                </Link>
            </div>
        </nav>
      </>
    )
}

export default Navbar
