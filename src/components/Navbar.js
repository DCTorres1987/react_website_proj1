import React, {useState} from 'react';
// useStategit is a Hook that lets you add React state to function components
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <>
      {/* short syntax for Fragment. allows you to return multiple elements and group a list of children without adding extra nodes to the DOM */}
        <nav className="navbar">
          {/* nav defines a set of navigation links */}
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
