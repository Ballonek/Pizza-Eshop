import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ListGroupItem, Badge, ListGroupItemHeading, InputGroup, InputGroupAddon, Input, Alert} from 'reactstrap';
import "./style.scss";
import { useEffect } from 'react';


const BasketFoodItem = ({ food, addFoodOrder, order }) => {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);


    const onChange = (e) => {
        setAmount(e.target.value);
        dispatch(addFoodOrder(food, e.target.value));
    }

    const objIndex = order.foods.findIndex((obj => obj.food._id === food._id));

    useEffect(() => {
        if (objIndex !== -1) {
            setAmount(order.foods[objIndex].amount);
        }
    }, [setAmount, objIndex, order.foods])


    return (
        <>
        {order.foods[0].food._id ?
        <ListGroupItem className="justify-content-between clearfix" style={{ cursor: "pointer" }} >
            <ListGroupItemHeading>
                <Badge>{food.number}</Badge> {food.name}
                <Badge color="danger" className="float-right">{order.foods[objIndex].food.price * order.foods[objIndex].amount},-</Badge>
                <InputGroup className="float-right">
                <Input value={amount} min={0} max={10} type="number" onChange={onChange} step="1" />
                <InputGroupAddon addonType="append"></InputGroupAddon>
                </InputGroup> 
                </ListGroupItemHeading>
            </ListGroupItem>
                :
            <ListGroupItem><Alert color="danger">V košíku nic není.</Alert></ListGroupItem>    
            }
            </>
            
    );
}

export default BasketFoodItem;
