import React from 'react';
import { Container, ListGroup } from 'reactstrap';
import { useSelector } from 'react-redux';
import { addFoodOrder } from '../../../actions/orderActions';
import BasketFoodItem from '../../foods/BasketFoodItem';
import OrderForm from '../../basket/OrderForm';

const FoodPage = () => {
    const order = useSelector(state => state.order)

    return (
        <Container>
                <ListGroup>
                    {order.foods.map(food =>
                        <BasketFoodItem key={food.food._id} food={food.food} addFoodOrder={addFoodOrder} order={order} />
                    )}
            </ListGroup>
            {!order.foods[0] && 
                <OrderForm />
            }
        </Container>
    );
}

export default FoodPage;
