import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Appbar() {
    return (
        <Navbar expand="lg" className="bg-purple">
            <Container>
                <Navbar.Brand href="#home" className='text-lg'>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link text-yellow" to='/'>Home</NavLink>
                        <NavLink className="nav-link text-yellow" to="/user">User</NavLink>
                        <NavLink className="nav-link text-yellow" to="/assigemnt">Assigemnt</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Appbar;