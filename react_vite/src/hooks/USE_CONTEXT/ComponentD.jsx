import { useContext } from "react";
import ComponentE from "./ComponentE";
import { user } from "./HooksUseContext";
const ComponentD = () => {
  const dbData = useContext(user);
  console.log(dbData);
  return (
    <div>
      <h2>Component D</h2>
      <ComponentE />
    </div>
  );
};

export default ComponentD;
