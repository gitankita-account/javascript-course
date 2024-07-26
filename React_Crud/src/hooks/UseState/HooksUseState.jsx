import { useState } from "react";
function HooksUseState() {
  // let count = 0
  //  var    calling function
  const [count, setCount] = useState(0);
  const [fullname, setFullname] = useState("");

  const [isFullname, setIsFullNameDisplay] = useState(false);

  let incrementCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  let decrementCount = () => {
    // setCount(count - 1);
    // console.log(count);
    if(count !== 0){
      setCount(count - 1);

    }else{
      console.log("invalid");
    }
  };

  let resetButton = () => {
    setCount(0);
  };

  //   form =====================================================

  const changehandler = (e) => {
    setFullname(e.target.value);
  };

    const submitHandle = (e) => {
      e.preventDefault();
      setIsFullNameDisplay(true);
    };


    const clearButton = (e) => {
      e.preventDefault()
      setFullname("")
  };

  

  return (
    <>
      <h1>Hooks :: {count}</h1>
      <button onClick={incrementCount}>Increment</button> ||{" "}
      <button onClick={decrementCount}>Decrement</button> ||{" "}
      <button onClick={resetButton}>Reset</button>
      <br />
      <br />
      <form action="">
        <input type="text" placeholder="Enter name" onChange={changehandler} value={fullname}/>
        <br />
        <br />
        <button onClick={submitHandle}>Submit</button> ||
        <button onClick={clearButton}>Clear</button>
      </form>
      <div>
        {isFullname ? (
          <h2>{fullname}</h2>
        ) : (
          <span style={{ color: "red" }}>No name visible</span>
        )}
      </div>
    </>
  );
}

export default HooksUseState;

//note:  useState works as a function in react it connects with virtual dom to display the value
