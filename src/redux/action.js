import { ADD_RESTAURANT, UPDATE_RESTAURANT } from "./actionTypes";

const addRestaurant = (newRest) => {
  return {
    type: ADD_RESTAURANT,
    newRest: newRest,
  };
};

const updateRestaurant = (newRest) => {
  return {
    type: UPDATE_RESTAURANT,
    newRest: newRest,
  };
};

export { fetchData };
