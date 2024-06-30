import ComponentA from "./ComponentA";
import React from "react";
import data from "../../fakedb/db.json";

// context created
export const user = React.createContext();
export const instituteData = React.createContext();
function HooksUseContext() {
  return (
    <>
      Hooks UseContext
      <user.Provider value={data}>
        <ComponentA />
      </user.Provider>
    </>
  );
}
export default HooksUseContext;
