import React, { useState }  from 'react';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendOrder } from '../../actions/orderActions'

const OrderForm = ({order}) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');

    const dispatch = useDispatch()

    const createOrder = (e) => {
        console.log(e.target.firstname)
        dispatch(sendOrder(order.food, order.orderPrice, firstname, lastname, email, {city, street}));
    }

    useEffect(() => {
    }, [firstname, lastname, email, order])

    return (
        <Form>
            <h4>Osobní údaje</h4>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for='firstname'>Jméno</Label>
                        <Input type='name' name='firstname' placeholder='Jméno' onChange={(e) => { setFirstname(e.target.value); }} />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for='lastname'>Příjmení</Label>
                        <Input type='name' name='lastname' placeholder='Příjmení' onChange={(e) => { setLastname(e.target.value); }} />
                    </FormGroup>
                </Col>
            </Row> 
            <FormGroup>
                <Label for='email'>Email</Label>
                <Input type='email' name='email' placeholder='Email' onChange={(e) => { setEmail(e.target.value); }} />
            </FormGroup>
            <h4>Adresa</h4>
            <Row>
                <Col md={6}>
                    <FormGroup>
                        <Label for='city'>Město/Obec</Label>
                        <Input type='text' name='city' placeholder='Město/Obec' onChange={(e) => { setCity(e.target.value); }} />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for='street'>Ulice a číslo popisné</Label>
                        <Input type='text' name='street' placeholder='Ulice a číslo popisné' onChange={(e) => { setStreet(e.target.value); }} />
                    </FormGroup>
                </Col>
            </Row> 
            <Button onClick={createOrder}>Objednat</Button>
        </Form>
    );
}

export default OrderForm;
