import React, { useState } from 'react';
import { CardFooter, Button, Collapse, CardText} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { createIngredient } from '../../../actions/ingredientActions';
import { useDispatch } from 'react-redux';
import IngredientsForm from '../ingredientsForm/IngredientsForm';

const IngredientsListFooter = ({category}) => {
    const [toggleForm, setToggleForm] = useState(false);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    const toggle = () => {
        setToggleForm(!toggleForm);
    };

    const addIngredient = (e) => {
        e.preventDefault();
        const ingredient = {
            name,
            price,
            category
        }

        dispatch(createIngredient(ingredient));
        setName('');
        setPrice(0);
        setToggleForm(!toggleForm);
    }

    return (
        <CardFooter className='category-card-footer' style={{ cursor: 'pointer' }}>
        <CardText>Přidat ingredienci: </CardText>
            <Collapse className='category-card-footer-item' isOpen={toggleForm}>            
                <IngredientsForm type="create" formMethod={addIngredient} setName={setName} price={price} setPrice={setPrice} name={name} toggle={toggleForm} />
            </Collapse>
            <Button outline color='secondary' onClick={toggle}>
            <FontAwesomeIcon icon={!toggleForm ? faPlusCircle : faMinusCircle} />
            </Button>
        </CardFooter>
    );
}

export default IngredientsListFooter;
