import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBoxOpen, faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="header-navbar">
            <div className="container-fluid" id="header-container">
                <a className="navbar-brand" href="#" id="header-brand">E-com Site</a>
                <button className="navbar-toggler" type="button" onClick={handleToggle} aria-controls="navbarNav" aria-expanded={isOpen} aria-label="Toggle navigation" id="header-toggler">
                    {isOpen ? (
                        <FontAwesomeIcon icon={faTimes} />
                    ) : (
                        <span className="navbar-toggler-icon"></span>
                    )}
                </button>
                <div className={`collapse navbar-collapse justify-content-between ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav mx-auto" id="header-nav-list"> {/* Centered the navbar items */}
                        <li className="nav-item" id="header-nav-item-home">
                            <a className="nav-link active" aria-current="page" href="#" id="header-nav-link-home"><FontAwesomeIcon icon={faHome} /> Home</a>
                        </li>
                        <li className="nav-item" id="header-nav-item-products">
                            <a className="nav-link" href="#" id="header-nav-link-products"><FontAwesomeIcon icon={faBoxOpen} /> Products</a>
                        </li>
                        <li className="nav-item" id="header-nav-item-about">
                            <a className="nav-link" href="#" id="header-nav-link-about"><FontAwesomeIcon icon={faInfoCircle} /> About Us</a>
                        </li>
                    </ul>
                    <div className="d-flex" id="header-button-container"> {/* Added a flex container for the button */}
                        <button className="btn btn-primary" type="button" id="header-login-signup-button">Login/Signup</button> {/* Combined Login and Signup button */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
