import React from 'react';
import { Container, Button, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'


const Header = () => {
    const { user, logOut } = useAuth();
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

                    {user.email ? <Button className='ms-5' onClick={logOut} variant="light">Logout</Button> :
                        <NavLink
                            to="/login"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }}
                        >
                            Login
                        </NavLink>
                    }
                    <NavLink
                        to="/medicalrecords"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red"
                        }}
                    >
                        Medical Records
                    </NavLink>
                    <Navbar.Text className='ms-5'>
                        Signed in as: <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                </Container>

            </Navbar>
        </div >
    );
};

export default Header;