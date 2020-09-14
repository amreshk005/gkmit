import { ADD_RESTAURANT, UPDATE_RESTAURANT, HANDLE_AUTH } from "./actionTypes";

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
const handleAuth = () => {
  return {
    type: HANDLE_AUTH,
  };
};

export { addRestaurant, updateRestaurant, handleAuth };
