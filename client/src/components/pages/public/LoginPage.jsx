import React, { useState } from 'react';
import { Container, Card, Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { loginUser } from '../../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


const LoginPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
        if (email && password) {
            dispatch(loginUser(email, password));
        }
    }

    const user = useSelector(state => state.user);

    return (
        <Container>
            {!user.isAuthenticated ?
                <Card>
                    <h3>Login Page</h3>
                    <Form onSubmit={login}>
                        <FormGroup>
                            <Label>
                                <Input type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                                Username
                            </Label>
                        </FormGroup>

                        <FormGroup>
                            <Label>
                                <Input type="password" password="password" onChange={(e) => setPassword(e.target.value)} />
                                Password
                            </Label>
                        </FormGroup>
                        <Button type="submit">Login</Button>
                    </Form>
                </Card>
                :
                <Redirect to='/dashboard' />
            }

        </Container>
    );
}

export default LoginPage;
