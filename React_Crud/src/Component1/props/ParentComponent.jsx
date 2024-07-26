// import ChildComponent from "./ChildComponenet";
import StdData from "../StdData"
import Studentdata from "../../database/db.json"
// let predict = true 

function ParentComponent() {
  return(
    <>
      <h2>ParentComponent</h2>
      <StdData Studentdata = {Studentdata}/>

      {/* <ChildComponent arr1 = {["one"," ", true, 123, " ", "true"]} str = {"String"} obj1 = {{one: "1", two: "2"}} boolean = {predict}/> */}

        
    </>
  );
}

export default ParentComponent;

