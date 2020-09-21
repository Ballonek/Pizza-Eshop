import React from 'react';
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';
//import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faPen, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import FoodIngredientSelector from './FoodIngredientSelector'

const FoodsForm = ({type='update', food, ingredients}) => {
    return (
        <Form>
        {(type === 'update') &&
            <Button className='update-item'>
                <FontAwesomeIcon icon={faPen} />
            </Button>}
        <FormGroup>
            <Label for="number">Číslo <Input /></Label>
        </FormGroup>
        <FormGroup>
            <Label for="name">Název <Input /></Label>
            </FormGroup>
        <FormGroup>
                <Label for="ingredients">Ingredience
                         {food.ingredients.map(ingredient => <FoodIngredientSelector key={ingredient._id} ingredient={ingredient} ingredients={ingredients} />)}
                </Label>
        </FormGroup>
        <FormGroup>
            <Label for="price">Cena <Input /></Label>
        </FormGroup>
            {(type === 'update') &&
                <FormGroup className="buttons">
                    <Button>
                        <FontAwesomeIcon icon={faTimesCircle} />
                    </Button>
                    <Button>
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </Button>
                </FormGroup>
            }
        </Form>
    );
}

export default FoodsForm;
