import { ADD_RESTAURANT, HANDLE_AUTH, HANDLE_LOGIN, HANDLE_LOGOUT, UPDATE_RESTAURANT } from "./actionTypes";

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
      let { restaurant } = action.newRest;
      return {
        ...state,
        restaurants: state.restaurants.map((e) => (restaurant === e.restaurant ? action.newRest : e)),
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
