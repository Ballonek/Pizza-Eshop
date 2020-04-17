import React from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { ListGroup, ListGroupItem, Container, Spinner, Row, Card, CardTitle, CardText, Button } from 'reactstrap';
import { useEffect } from 'react';
import { loadFoods } from '../../../actions/foodActions';
import { addFoodOrder } from '../../../actions/orderActions';

import FoodItem from '../../foods/FoodItem'
import { Link } from 'react-router-dom';

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
                        <FoodItem key={food._id} food={food} addFoodOrder={addFoodOrder} order={order} />
                    ))
                }
            </ListGroup>
            <Card body outline color="secondary" className="float-right">
                <CardTitle>Vaše objednávka</CardTitle>
                {order.orderPrice > 0 &&
                    order.food.map(f => (
                        f.amount > 0 &&
                        <CardText key={f._id}>{f.amount}x {f.name} - {f.amount * f.foodPrice},-</CardText>
                    ))
                }
                {order.orderPrice > 0 &&
                    <CardText>{order.orderPrice},-</CardText>
                }
                <Button><Link to='/nakupni-kosik'>Kosik</Link></Button>
            </Card>
        </Container>
    );
}

export default FoodPage;