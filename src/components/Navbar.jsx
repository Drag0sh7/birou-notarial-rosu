import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">Notariat Roșu Elisabeta</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><Link to="/" className="nav-link">Acasă</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/servicii">Servicii</Link></li>
                        <li className="nav-item"><Link to="/profil" className="nav-link">Profil</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>


                    </ul>
                </div>
            </div>
        </nav>
    );
}
