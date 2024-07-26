import { Button } from "@mui/material";
import { memo } from "react";

const Buttons = ({ children, handleClick }) => {
  console.log(children);
  return (
    <div>
      <Button color="secondary" variant="contained" onClick={handleClick}>
        {children}
      </Button>
    </div>
  );
};

export default memo(Buttons);
