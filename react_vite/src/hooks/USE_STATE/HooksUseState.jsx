import { useState } from "react";
import { Button } from "@mui/material";
function HooksUseState() {
  //   let count = 0;

  const [count, setCount] = useState(0);
  const [fullname, setFullname] = useState("");
  const [isFullname, setIsFullNameDisplay] = useState(false);
  
  const stateHandler = () => {
    setCount(count + 10);
    console.log(count);
  };

  const changehandler = (e) => {
    setFullname(e.target.value);
  };

  const saubmitHandler = (e) => {
    e.preventDefault();
    setIsFullNameDisplay(true);
  };

  return (
    <>
      <h2>UseState Hook : {count}</h2>
      <button onClick={stateHandler}>State Change</button> <br />
      <br />
      <form>
        <input
          type="text"
          placeholder="Please enter your name"
          onChange={changehandler}
        />

        <Button variant="contained" onClick={saubmitHandler}>
          Submit
        </Button>
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
