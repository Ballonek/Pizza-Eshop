import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { ListGroup, ListGroupItem, Container, Spinner, Card, CardTitle, Badge, CardBody } from 'reactstrap';
import { useEffect } from 'react';
import { loadFoods } from '../../../actions/foodActions';
import { addFoodOrder } from '../../../actions/orderActions';

import BasicFoodItem from '../../foods/BasicFoodItem';

const FoodPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(loadFoods());
        }
        fetchData();

    }, [dispatch]);
    
    const foods = useSelector(state => state.foods);
    const order = useSelector(state => state.order);

    console.log(order.foods[0].food._id)

    return (
        <Container className="food-page">
            <h1>Naše nabídka</h1>
            <ListGroup>
                {foods.isLoading &&
                    <ListGroupItem className="justify-content-between clearfix">
                    <Spinner color="dark" />
                    </ListGroupItem>
                }
                {!foods.isLoading &&
                    foods.foods.map(food => (
                        <BasicFoodItem key={food._id} food={food} addFoodOrder={addFoodOrder} order={order} />
                    ))
                }
            </ListGroup>

            {order.foods[0].food._id &&
            <Card body outline color="secondary" className="float-right">
                    <CardBody>
                    <CardTitle>Vaše objednávka: </CardTitle>
                    <ul className="food-list">
                        {order.foods.map(food => (
                            <li>
                            <Badge>
                                {food.amount}x
                            </Badge>
                                {food.food.number}.</li>
                         ))}
                    </ul>
                    </CardBody>
                    </Card>
                }
        </Container>
    );
}

export default FoodPage;