import {
    ORDER_CREATE,
    ORDER_ADD_FOOD
} from '../actions/types';
import axios from 'axios'

// Check token & load user
export const sendOrder = (food, price, firstname, lastname, email, address) => async (dispatch) => {
    const order = {
        food,
        price,
        firstname,
        lastname,
        email,
        address
    }

    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };
  try {
      const res = await axios.post('/api/orders/', order, config);
      dispatch({
          type: ORDER_CREATE,
          payload: res.data
      });
  } catch (error) {
    
  }


};
// Check token & load user
export const addFoodOrder = (food, amount) => async (dispatch, getState) => {
    amount = parseInt(amount);
    let foods = getState().order.foods.filter(value => Object.keys(value.food).length !== 0);

    const index = foods.findIndex(f => f.food._id === food._id)


    if(index === -1) {
        foods.push({ food, amount });
    } else {
        foods[index].amount = amount;
    }

    const orderAmount = foods.reduce((acc, next) => {
        return acc + next.amount;
    }, 0);

    const orderPrice = foods.reduce((acc, next) => {
        return acc + (next.amount * next.food.price);
    }, 0);


    dispatch({
        type: ORDER_ADD_FOOD,
        payload: [...foods],
        amount: orderAmount,
        price: orderPrice
    })

};