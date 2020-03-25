import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import logo from '../img/Logo.png';
import "./style.scss";
import { logoutUser } from '../../actions/userActions';


const Navbar = () => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutUser());
    }
    
    return (
        <div className="navbar">
            <nav>
                <Link to='/' className="logo">
                    <img src={logo} alt="LOGO" srcSet="" />
                </Link>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    {!isAuthenticated ? <li><Link to='/login'>Login/Register</Link></li> : ""}
                    {isAuthenticated ? <li><Link to='/dashboard'>Dashboard</Link></li> : ""}
                    {isAuthenticated ? <li><Link to='/recipes'>Recipes</Link></li> : ""}
                    {isAuthenticated ? <li><Link to='/login' onClick={logout}>Logout</Link></li> : ""}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
