import React from "react";
import loginImg from "../img/Logo.png";
import { loginUser } from '../../actions/userActions';
import { useDispatch } from 'react-redux';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'

export const Login = (props) => {
  const dispatch = useDispatch();

  const login = async (e) => {
    e.preventDefault();
    
    const user = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    dispatch(loginUser(user));
  }


  return (
    <div className="base-container" ref={props.containerRef}>
      <Form onSubmit={login} autoComplete="off">
        <div className="header">Login</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} alt="register" />
            </div>
              
            <div className="form">                
              <FormGroup>
              <Input type="text" name="email" autoComplete="none" />
              <Label for="email" className="label-name"><span className="content-name">Email</span></Label>
              </FormGroup>
                
              <FormGroup>
              <Input type="password" name="password" autoComplete="none" />
              <Label for="password" className="label-name"><span className="content-name">Password</span></Label>
              </FormGroup>    
            </div>
          
          <div className="footer">
              <Button className="btn">
                Login
              </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}
