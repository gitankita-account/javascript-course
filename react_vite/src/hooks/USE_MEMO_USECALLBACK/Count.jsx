import { memo } from "react";

const Count = ({ count }) => {
  console.log(count);
  return <h3>{count}</h3>;
};

export default memo(Count);
