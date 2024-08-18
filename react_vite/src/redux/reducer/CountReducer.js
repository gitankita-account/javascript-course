import { DECREMENT, INCREMENT, RESET } from "../types/countTypes";

const initialValue = 0;

export const countReducer = (state = initialValue, action) => {
  // action={
  //     type:"INCREMENT"
  // }
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
};
