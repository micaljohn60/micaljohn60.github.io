import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="brand-title">H Industries</div>
            <a href="#" className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className="navbar-links">
                <ul>
                    <li><Link to="/myskills">My Skills</Link></li>
                    <li><Link to="/">About Me</Link></li>
                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;