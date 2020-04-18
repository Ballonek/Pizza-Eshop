import React, { useEffect } from 'react';
import { ListGroupItem, Badge, ListGroupItemHeading, Spinner, Button } from 'reactstrap';
import "./style.scss";
import { useDispatch } from 'react-redux';


const AdminFoodItem = ({ food, isLoading, removeFood }) => {

    return (
        <ListGroupItem className="clearfix" style={{ cursor: "pointer" }} >
            <ListGroupItemHeading>
                {isLoading ? <Spinner color='dark' />
                :
                    <>
                        <Badge>{food.number}</Badge> {food.name}
                        <Button className='float-right' color='danger' onClick={() => removeFood(food._id)}>x</Button>
                    </>
            }
            </ListGroupItemHeading>
        </ListGroupItem> 
            
    );
}

export default AdminFoodItem;
