import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar-glass navbar-fixed">
            <div className="navbar-container">
                <Link className="navbar-brand" to="/">
                    Notariat Roșu Elisabeta
                </Link>

                <button className="burger" onClick={toggleMenu}>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                </button>

                <div className={`navbar-links ${isOpen ? 'show' : ''}`}>
                    <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Acasă</Link>
                    <Link to="/servicii" className="nav-link" onClick={() => setIsOpen(false)}>Servicii</Link>
                    <Link to="/profil" className="nav-link" onClick={() => setIsOpen(false)}>Profil</Link>
                    <Link to="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            </div>
        </nav>
    );
}
