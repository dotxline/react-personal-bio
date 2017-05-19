import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <Link to="/home"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/gallery"><li>Gallery</li></Link>
                <Link to="/portfolio"><li>Portfolio</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </nav>
        );
    }
};

export default Navbar;