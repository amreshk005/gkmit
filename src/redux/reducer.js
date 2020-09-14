import { ADD_RESTAURANT, DELETE_RESTAURANT, HANDLE_AUTH, HANDLE_LOGIN, HANDLE_LOGOUT, UPDATE_RESTAURANT } from "./actionTypes";

const initStore = {
  isLoading: false,
  LoggedIn: {
    isLoggedIn: false,
    username: "amresh",
  },
  restaurants: [],
  users: [
    {
      username: "amresh",
      password: "amresh",
      type: "admin",
    },
  ],
};

const product = (state = initStore, action) => {
  switch (action.type) {
    case ADD_RESTAURANT:
      return {
        ...state,
        restaurants: [...state.restaurants, action.newRest],
      };

    case UPDATE_RESTAURANT:
      let { restaurant, rating, menuItem } = action.newRest;

      let newUpdate = state.restaurants.map((e) => (restaurant === e.restaurant ? { ...e, rating: rating, menuItem: menuItem } : e));
      console.log(newUpdate);
      return {
        ...state,
        restaurants: newUpdate,
      };
    case DELETE_RESTAURANT:
      console.log(action.newRest.restaurant);

      let deletedItem = state.restaurants.filter((e) => action.newRest.restaurant !== e.restaurant);
      console.log(deletedItem);
      return {
        ...state,
        restaurants: deletedItem,
      };
    case HANDLE_LOGIN:
      return {
        ...state,
        LoggedIn: {
          ...state.LoggedIn,
          isLoggedIn: true,
        },
      };
    case HANDLE_LOGOUT:
      return {
        ...state,
        LoggedIn: {
          ...state.LoggedIn,
          isLoggedIn: false,
        },
      };

    default:
      return state;
  }
};

export default product;
