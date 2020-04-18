import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle, faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { ListGroupItem, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./style.scss";

const AddFoodItem = ({addFood, key}) => {
    const [toggle, setToggle] = useState(false)

    const toggleForm = () => {
        setToggle(!toggle)
    }

    const createFood = (e) => {
        e.preventDefault();
        addFood({
            number: e.target.number.value,
            name: e.target.name.value,
            price: e.target.price.value,
            description: e.target.description.value
        });
        toggleForm();
    }


    return (
    <ListGroupItem key={key} className='food-add'>
            {toggle ?
                <div className="food-form">
                 
                    <Form onSubmit={createFood}>
                        <FormGroup>
                            <Label for='number'>Číslo: <Input type='number' name='number'></Input></Label>
                        </FormGroup>

                        <FormGroup>
                        <Label for='name'>Název: <Input type='name' name='name'></Input></Label>
                        </FormGroup>
                        <FormGroup>
                            <Label for='price'>Cena: <Input type='number' name='price'></Input></Label>
                        </FormGroup>
                        <FormGroup>
                            <Label for='description'>Popis: <Input type='textarea' name='description'></Input></Label>
                        </FormGroup>
                        <Button style={{ textAlign: 'center', marginRight: '10px' }} onClick={toggleForm}>
                            <FontAwesomeIcon icon={faMinusCircle} />
                        </Button>
                        <Button style={{ textAlign: 'center' }} type='submit'>
                            <FontAwesomeIcon icon={faPizzaSlice} />
                        </Button>
                    </Form>
                </div>
                    :
                    <Button style={{ textAlign: 'center' }} onClick={toggleForm}>
                        <FontAwesomeIcon icon={faPlusCircle} />
                    </Button>
            }
    </ListGroupItem>
    );
}

export default AddFoodItem;
