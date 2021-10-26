import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"> <span className='text-warning'>EMR</span> DApp</Navbar.Brand>

                    <NavLink
                        to="/home"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/register"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        Register
                    </NavLink>
                    <NavLink
                        to="/login"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        Login
                    </NavLink>
                    <NavLink
                        to="/medicalrecords"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        Medical Records
                    </NavLink>
                    {/* <Navbar.Text className='ms-5'>
                        Signed in as: <a href="#login">{user?.displayName}</a>
                    </Navbar.Text> */}
                </Container>

            </Navbar>
        </div >
    );
};

export default Header;