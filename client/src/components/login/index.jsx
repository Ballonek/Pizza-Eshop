import React, { useState, useEffect } from 'react';
import { Login } from './login';
import { Register } from './register';
import { RightSide } from './rightSide'
import "./style.scss";
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

// export { Login } from "./login";
// export { Register } from "./register";

const LoginRegister = () => {
  const [isLogginActive, setIsLogginActive] = useState(true);
  const [rightSide, setRightSide] = useState('');
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  useEffect(() => {
    document.querySelector('.right-side').classList.add('right');
    setRightSide(document.querySelector('.right-side'));
  }, [])

  if (isAuthenticated) {
    return <Redirect to='/recipes/636601' />
  }


  const changeState = () => {
  
    if (isLogginActive) {
      rightSide.classList.remove("right");
      rightSide.classList.add("left");
    } else {
      rightSide.classList.remove("left");
      rightSide.classList.add("right");
    }
    setIsLogginActive(!isLogginActive);
  }
  
  const current = isLogginActive ? "Register" : "Login";
  const currentActive = isLogginActive ? "login" : "register";

  return (
    <div className="login">
      <div className="container">
        {isLogginActive && (
          <Login />
        )}
        {!isLogginActive && (
          <Register />
        )}
      </div>
      <RightSide
        current={current}
        currentActive={currentActive}
        onClick={changeState}
      />
    </div>
  );
}

export default LoginRegister;