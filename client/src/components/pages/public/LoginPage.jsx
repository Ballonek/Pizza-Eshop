import React from 'react';
import { Container, Card, Form, FormGroup, Input, Label } from 'reactstrap';

const LoginPage = () => {
    return (
        <Container>
            <Card>
                <h3>Login Page</h3>
                <Form>
                    <FormGroup>
                        <Label>
                            <Input />
                                Username
                            </Label>
                    </FormGroup>

                    <FormGroup>
                        <Label>
                            <Input />
                                Password
                            </Label>
                    </FormGroup>
                </Form>
            </Card>


        </Container>
    );
}

export default LoginPage;
