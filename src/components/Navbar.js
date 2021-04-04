import React, {useState, useEffect } from 'react';
// useState is a Hook that lets you add React state to function components
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
    };

    useEffect(() => {
      showButton();
    }, []);

  window.addEventListener('resize', showButton);
  

    return (
      <>
      {/* short syntax for Fragment. allows you to return multiple elements and group a list of children without adding extra nodes to the DOM */}
        <nav className="navbar">
          {/* nav defines a set of navigation links */}
            <div className=".navbar-container">
                <Link to="/" className="navbar-logo">
                  {/* allows users to navigate around your application. will render a fully accessible anchor tag with the proper href. */}
                  {/* setup a relative link that will direct to landing page */}
                  DCT <i class="fab fa-wolf-pack-battalion"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className="nav-item">
                    <Link 
                        to='/'
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link 
                        to='/services' 
                        className='nav-links' 
                        onClick={closeMobileMenu}>
                      Services
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link 
                        to='/products' 
                        className='nav-links'  
                        onClick={closeMobileMenu}>
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link 
                          to='/sign-up' 
                          className='nav-links-mobile'
                          onClick={closeMobileMenu}>
                      Sign Up
                    </Link>
                  </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
      </>
    )
}

export default Navbar;
