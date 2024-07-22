import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'; 

const linkProps = {
    spy: true,
    smooth: true,
    offset: -70,
    duration: 300,
    className: 'nav-link',
  };

function Navbar() {
  return ( 
    <nav className="navbar">
        <div className="left">
            <Link {...linkProps}>
            О компании
            </Link>
            <Link {...linkProps}>
                Контакты
            </Link>
            <Link {...linkProps} to="price">
                Прайс
            </Link>
        </div>
        <div className="">
            <Link {...linkProps}>
            Партнёры
            </Link>
            <Link {...linkProps}>
                Социальные сети
            </Link>
            <Link {...linkProps}>
                Портфолио
            </Link>
        </div>
    </nav> 
  );
}

export default Navbar;