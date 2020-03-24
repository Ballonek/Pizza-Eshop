import React from "react";
import loginImg from "../../login.svg";

export const Login = (props) => {

  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="current-password" name="password" placeholder="password" />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn">
          Login
          </button>
      </div>
    </div>
  );
}
