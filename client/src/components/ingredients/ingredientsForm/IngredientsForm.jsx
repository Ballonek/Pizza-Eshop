import React from 'react';
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faPen, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const IngredientsForm = ({name, price, setName, setPrice, formMethod, toggle, type, toggleUpdate, removeItem}) => {

    return (
        <Form onSubmit={formMethod} className={toggle ? 'active' : 'disabled'} >
        {(type === 'update') &&
            <Button className='update-item' onClick={toggleUpdate} color={!toggle ? "secondary" : "danger"}>
                <FontAwesomeIcon icon={faPen} />
            </Button>}
        <FormGroup>
            <Label for="name">Název <Input value={name} type="text" name="name" onChange={e => setName(e.target.value)} /></Label>
        </FormGroup>
        <FormGroup>
            <Label for="price">Cena <Input value={price} type="number" name="price" onChange={e => setPrice(e.target.value)} /></Label>
        </FormGroup>
        {(type === 'update') &&
            <FormGroup className="buttons">
                <Button
                    disabled={!toggle}
                    outline
                    color="danger"
                    onClick={removeItem}
                >
                    <FontAwesomeIcon icon={faTimesCircle} />
                </Button>
                <Button
                    disabled={!toggle}
                    outline
                    color="success"
                    type="submit"
                >
                    <FontAwesomeIcon icon={faCheckCircle} />
                </Button>
            </FormGroup>
        }
        {(type === 'create') && <Button outline color="info" type="submit"><FontAwesomeIcon icon={faCheckCircle} /></Button>}
        </Form>
    );
    
}

export default IngredientsForm;
