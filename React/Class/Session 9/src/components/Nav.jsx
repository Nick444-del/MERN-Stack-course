import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import axios from 'axios';

function BasicExample() {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');

    const getValue = () => {
        setValue(data);
    }

    const apiData = async () => {
        const res = await axios.get(`https://dummyjson.com/products/search?q=${value}`);
        setData(res.data.products);
    }

    useEffect(() => {
        apiData()
    }, [value])

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">E-Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/product">Product</NavLink>
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
                <Form inline>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2"
                                value={data}
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit" onClick={getValue}>Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Navbar>
    );
}

export default BasicExample;