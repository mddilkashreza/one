import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/header.scss";
import { HashLink } from 'react-router-hash-link';



const  Header = () => {
  return (
    <fragments>
        <nav>
            <h1>
                Dilkash Reza
            </h1>
            <main>
                <HashLink to="/#home">Home</HashLink>
                <Link to="/contact">Contact</Link>
                <HashLink to="/#about">About</HashLink>
                <HashLink to="/#brands">Brands</HashLink>
                <Link to="/Services">Services</Link>
            </main>
        </nav>
    </fragments>
  )
};

export default Header;
