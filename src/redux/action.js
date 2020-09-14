import { ADD_RESTAURANT, UPDATE_RESTAURANT, HANDLE_LOGIN, HANDLE_LOGOUT } from "./actionTypes";

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
const handleLogin = () => {
  return {
    type: HANDLE_LOGIN,
  };
};

const handleLogout = () => {
  return {
    type: HANDLE_LOGOUT,
  };
};

export { addRestaurant, updateRestaurant, handleLogin, handleLogout };
