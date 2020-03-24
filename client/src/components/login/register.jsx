import React from "react";
import loginImg from "../../login.svg";
import { registerUser } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

export const Register = (props) => {
  const dispatch = useDispatch();


  const register = async (e) => {
    e.preventDefault();
    
    const user = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value
    }

    dispatch(registerUser(user));
  }

  return (
    <div className="base-container" ref={props.containerRef}>
      <form onSubmit={register}>
        <div className="header">Register</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
              
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username" />
              </div>
                
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="email" />
              </div>
                
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="new-password" name="password" placeholder="password" />
              </div>    
            </div>
          
          <div className="footer">
              <button className="btn">
                Register
              </button>
          </div>
        </div>
      </form>
    </div>
  );
}
