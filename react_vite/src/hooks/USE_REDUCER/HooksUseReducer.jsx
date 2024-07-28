import { useState, useReducer } from "react";

function HooksUseReducer() {
  let initialValue = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return 0;
    }

    // if (action === "increment") {
    //   return state + 1;
    // }
    // if (action === "decrement") {
    //   return state - 1;
    // }
    // if (action === "reset") {
    //   return 0;
    // }
  };

  const [count, dispatch] = useReducer(reducer, initialValue);

  const increment = () => {
    dispatch("increment");
  };
  const decrement = () => {
    dispatch("decrement");
  };
  const reset = () => {
    dispatch("reset");
  };
  return (
    <>
      <h2>Hooks Usereducer {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default HooksUseReducer;
