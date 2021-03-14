

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
                    <li><a href="/skills">My Skills</a></li>
                    <li><a href="/">About Me</a></li>
                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;