import React from 'react';
import { NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../actions/userActions';
import { useDispatch } from 'react-redux';


const PrivateMenu = ({ setUserView }) => {
    const dispatch = useDispatch();

    return (
        <div className="sidebar">
                <NavbarBrand>Pizza</NavbarBrand>
                <Nav navbar>
                    <NavItem>
                        <Link to='/admin/dashboard'>Přehled</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/admin/foods">Jídla</Link>
                </NavItem>
                <NavItem>
                    <Link to="/admin/ingredients">Ingredience</Link>
                </NavItem>
                <div className="nav-footer">
                    <NavItem className="view-item">
                        <Link to='/' onClick={() => setUserView(true)}>Náhled</Link>
                    </NavItem>
                    <NavItem className="view-item">
                        <Link to='/' onClick={() => dispatch(logoutUser())}>Logout</Link>
                    </NavItem>
                </div>
                </Nav>     
        </div>
    );
};

export default PrivateMenu;