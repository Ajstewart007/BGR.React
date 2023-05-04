import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
import { Button } from "bootstrap";
import { Container, NavbarBrand } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import LoginButton from "../login/LoginButton";
import LogoutButton from "../login/LogoutButton";


const Header = () => {
    const {user, isAuthenticated} = useAuth0();

return(
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <NavbarBrand href="/" style={{"colour":'green'}}>
                 <FontAwesomeIcon icon ={faDiceD20} style={{"colour":'--bs-green'}}/>BGR
            </NavbarBrand>
            <NavbarToggle aria-controls="navbarScroll"></NavbarToggle>
            <NavbarCollapse id ="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{maxHeight: '100px'}}
                navbarScroll/>
                <NavLink className="nav-link" to="/" style={{"colour":'green'}}>Home</NavLink>
                <NavLink className="nav-link" to="/recommended" style={{"colour":'green'}}>Recommended</NavLink>
                {
                isAuthenticated && (
                    <>
                    <NavLink className="nav-link" to="/recruit" style={{"colour":'green'}}>Recruit</NavLink></>
                )
                }
                
                <NavLink className="nav-link" to="/profile" style={{"colour":'green'}}>Profile</NavLink>
            </NavbarCollapse>
        </Container>
    </Navbar>
)

}

export default Header