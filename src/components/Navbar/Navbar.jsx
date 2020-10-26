import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.scss";
import PersonOutlineIcon from '@material-ui/icons/PersonOutlineOutlined'
import ShoppingBasketOutlined from '@material-ui/icons/ShoppingBasketOutlined';

const Navbar = () => {
    return (
        <div className="header">
           <Link className="logo-container" to="/">Index.</Link>
           <div className="options">
               <Link className="option" to="/services">
                <h3>SERVICES</h3>
               </Link>
               <Link className="option" to="/services">
                <h3>FRAMES</h3>
               </Link>
               <Link className="option" to="/services">
                <h3>BLOG</h3>
               </Link>
               <Link className="option" to="/services">
                <h3>CONTACT US</h3>
               </Link>
               <Link className="option" to="/services">
                <h3>GIFTS</h3>
               </Link>
               <Link className="option" to="/services">
                <PersonOutlineIcon />
               </Link>
               <Link className="option" to="/services">
                <ShoppingBasketOutlined />
               </Link>
           </div>
        </div>
    )
}

export default Navbar;