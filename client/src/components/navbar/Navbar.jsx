import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./style.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Badge
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';


const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const amount = useSelector(state => state.order.orderAmount);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Navbar color="dark" dark expand="md">
        <Container>      
        <NavbarBrand>Pizza</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to='/'>Domů</Link>
            </NavItem>
            <NavItem>
              <Link to="/jidelni-listek">Jídelní lístek</Link>
            </NavItem>
          </Nav>
            <Link to="/nakupni-kosik" className="navbar-basket">
              {amount > 0 && <Badge color="danger" pill>{amount}</Badge>}
              <FontAwesomeIcon icon={faShoppingBasket} /></Link>
                  </Collapse>
              </Container>
      </Navbar>
    </div>
  );
}

export default Menu;


