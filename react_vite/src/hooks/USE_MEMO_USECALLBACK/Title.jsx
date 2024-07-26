import { memo } from "react";

function Title({ title }) {
  console.log(title);
  return <h2>{title}</h2>;
}

export default memo(Title);
