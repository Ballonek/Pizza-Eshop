import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListGroupItem, Badge, Collapse, ListGroupItemText, ListGroupItemHeading, InputGroup, InputGroupAddon, Input} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import "./style.scss";
import { useEffect } from 'react';


const FoodItem = ({ food, addFoodOrder, order }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);


    const onChange = (e) => {
        setAmount(e.target.value);
        dispatch(addFoodOrder(food, e.target.value));
    }

    const objIndex = order.food.findIndex((obj => obj._id === food._id));

    useEffect(() => {
        if (objIndex !== -1) {
            setAmount(order.food[objIndex].amount);
        }
    }, [])


    return (
        <>
        <ListGroupItem className="justify-content-between clearfix" style={{ cursor: "pointer" }} >
                <ListGroupItemHeading  onClick={toggle} >
                    <Badge>{food.number}</Badge> {food.name}
                    <Badge color="danger" className="float-right">{food.price},-</Badge>
                </ListGroupItemHeading>
        <Collapse isOpen={isOpen}>
            <ListGroupItemText>
                {food.description}
                    </ListGroupItemText>
                    <InputGroup className="float-right">
                        <Input value={amount} min={0} max={10} type="number" onChange={onChange} step="1" />
                    
                    <InputGroupAddon addonType="append"><FontAwesomeIcon icon={faShoppingBasket} /></InputGroupAddon>
              </InputGroup>
        </Collapse>
    </ListGroupItem>      
        </>
    );
}

export default FoodItem;
