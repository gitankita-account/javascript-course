import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../redux/actions/countActions";
import { DECREMENT, INCREMENT } from "../redux/types/countTypes";
const Count = () => {
  // useSelector -> this function is used to get data from redux
  // useDispatch -> this function is used to call action on redux

  const dispatch = useDispatch();

  const countReducer = useSelector((state) => {
    // console.log(state);
    return state.countReducer;
  });

  console.log(countReducer);

  const incrementCount = () => {
    dispatch(increment(INCREMENT));
    // increment(INCREMENT);
  };
  const decrementCount = () => {
    dispatch(increment(DECREMENT));
    // increment(INCREMENT);
  };
  return (
    <>
      <h2>{countReducer}</h2>

      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button>Reset</button>
    </>
  );
};

export default Count;
