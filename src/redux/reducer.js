import { ADD_RESTAURANT, UPDATE_RESTAURANT } from "./actionTypes";

const initStore = {
  isLoading: false,
  restaurants: [
    {
      restaurant: "Maharaja Restaurant",
      menuItem: [
        {
          foodName: "samosa",
          Quantity: 1,
          price: 10,
        },
        {
          foodName: "chowmin",
          Quantity: 1,
          price: 45,
        },
        {
          foodName: "ice cream",
          Quantity: 1,
          price: 120,
        },
      ],
      hours: "9.00 AM - 7.00 PM",
      rating: 4.3,
    },
    {
      restaurant: "Desi Restaurant",
      menuItem: [
        {
          foodName: "Tikki",
          Quantity: 1,
          price: 10,
        },
        {
          foodName: "puri",
          Quantity: 1,
          price: 25,
        },
        {
          foodName: "Roll",
          Quantity: 1,
          price: 35,
        },
      ],
      hours: "9.00 AM - 7.00 PM",
      rating: 3.9,
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

    default:
      return state;
  }
};

export default product;
