import React from 'react';
import { Container, Alert, ListGroupItem, Badge, ListGroup } from 'reactstrap';
import { useSelector } from 'react-redux';
import OrderForm from '../../basket/OrderForm'


const FoodPage = () => {
    const order = useSelector(state => state.order);

    return (
        <Container>
            <h1>Nákupní košík</h1>
            {order.orderAmount === 0 ? <Alert color="danger">Nemáte zde nic k nákupu</Alert> :
                <><ListGroup>
                    {order.food.map(f => (
                        <ListGroupItem key={f._id}><Badge>{f.number}</Badge> {f.name} {f.amount}x -{f.foodPrice},- => {f.amount * f.foodPrice},-</ListGroupItem>
                    ))}
                </ListGroup>
                <OrderForm order={order} /></>
            }

        </Container>
    );
}

export default FoodPage;
