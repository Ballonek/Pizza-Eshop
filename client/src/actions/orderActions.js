import {
    ORDERS_LOADED,
    ORDERS_LOADING,
    ORDER_CREATE,
    ORDER_UPDATE,
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
    const objIndex = getState().order.food.findIndex((obj => obj._id == food._id));
    const filteredFood = getState().order.food.filter(e => e._id !== '');

    if (objIndex === -1) {
        filteredFood.push({
            _id: food._id,
            number: food.number,
            name: food.name,
            foodPrice: food.price,
            amount
        });
    } else {
        filteredFood[objIndex].amount = amount;
    }

    const orderPrice = filteredFood.reduce(function (acc, obj) {
        return acc + (obj.foodPrice * obj.amount);
    }, 0); // 7

    const orderAmount = filteredFood.reduce(function (acc, obj) {
        return acc + obj.amount;
    }, 0); // 7

    dispatch({
        type: ORDER_ADD_FOOD,
        payload: {
            food: filteredFood,
            orderPrice,
            orderAmount
        }
    })

};