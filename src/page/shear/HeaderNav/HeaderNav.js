import { faMoon, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContextProvider } from '../../../App';


const HeaderNav = () => {
    const [isDarkTheme, setIsDarkTheme] = useContext(ThemeContextProvider);
    const location = useLocation();
    console.log(location.pathname);
    const path = location.pathname;
    const onMouseOverHandler = (e) => {
        e.target.style.background = "#00bbff79";
        e.target.style.color = isDarkTheme ? '#dbdbdb' : '#303030';
    }
    const onMouseOutHandler = (e) => {
        e.target.style.background = "none";
        e.target.style.color =  isDarkTheme ? '#dbdbdb' : '#303030';
    }
    const linkStyle = {
        width: "80px",
        textDecoration: 'none', 
        fontWeight: 'bold',
        color: isDarkTheme ? '#dbdbdb' : '#303030',
    }

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand
                    href="/"
                    className={`btn ${isDarkTheme ? 'text-light' : 'text-dark'}`}
                >
                    mehedy-portfolio
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className={'bg-info'}/>
                <Navbar.Collapse id="basic-navbar-nav" className="">
                    <Nav className="ms-auto">
                        <Link
                            style={linkStyle}
                            onMouseOver={onMouseOverHandler}
                            onMouseOut={onMouseOutHandler}
                            className={`btn m-1 ${path==="/" && "bg-info" }`}
                            to="/"
                        >
                            Home
                        </Link>
                        <Link
                            style={linkStyle}
                            onMouseOver={onMouseOverHandler}
                            onMouseOut={onMouseOutHandler}
                            className={`btn m-1 ${path==="/about" && "bg-info" }`}
                            to="/about"
                        >
                            About
                        </Link>
                        <Link
                            style={linkStyle}
                            onMouseOver={onMouseOverHandler}
                            onMouseOut={onMouseOutHandler}
                            className={`btn m-1 ${path==="/project" && "bg-info" }`}
                            to="/project"
                        >
                            Project
                        </Link>
                        <Link
                            style={linkStyle}
                            onMouseOver={onMouseOverHandler}
                            onMouseOut={onMouseOutHandler}
                            className={`btn m-1 ${path==="/resume" && "bg-info" }`}
                            to="/resume"
                        >
                            Resume
                        </Link>
                        <Link
                            style={linkStyle}
                            onMouseOver={onMouseOverHandler}
                            onMouseOut={onMouseOutHandler}
                            className={`btn m-1 ${path==="/blog" && "bg-info" }`}
                            to="/blog"
                        >
                            Blog
                        </Link>
                        <Link
                            style={linkStyle}
                            onMouseOver={onMouseOverHandler}
                            onMouseOut={onMouseOutHandler}
                            className={`btn m-1 ${path==="/contact" && "bg-info" }`}
                            to="/contact"
                        >
                            Contact
                        </Link>
                        
                        <div>
                            <h4
                                style={{ width: '80px' }}
                                className={`btn m-1 ${isDarkTheme ? 'btn-light' : 'btn-dark'}`}
                                onClick={() => setIsDarkTheme(!isDarkTheme)}
                            >
                                {
                                    isDarkTheme ?
                                        <FontAwesomeIcon icon={faMoon} />
                                        :
                                        <FontAwesomeIcon icon={faLightbulb} />

                                }
                            </h4>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderNav;