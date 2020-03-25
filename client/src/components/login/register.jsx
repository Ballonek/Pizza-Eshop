import React from "react";
import loginImg from "../img/Logo.png";
import { registerUser } from '../../actions/userActions';
import { useDispatch } from 'react-redux';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

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
      <Form onSubmit={register} autoComplete="off">
        <div className="header">Register</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} alt="register" />
            </div>
              
            <div className="form">
              <FormGroup>
              <Input type="text" name="username" autoComplete="none" />
              <Label for="username" className="label-name"><span className="content-name">Username</span></Label>
              </FormGroup>
                
              <FormGroup>
              <input type="text" name="email" autoComplete="none" />
              <Label for="email" className="label-name"><span className="content-name">Email</span></Label>
              </FormGroup>
                
              <FormGroup>
              <input type="password" name="password" autoComplete="none" />
              <Label for="password" className="label-name"><span className="content-name">Password</span></Label>
              </FormGroup>    
            </div>
          
          <div className="footer">
              <Button className="btn">
                Register
              </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}
