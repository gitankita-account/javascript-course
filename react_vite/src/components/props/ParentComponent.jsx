import ChildComponent from "./ChildComponent";

function ParentComponent() {
  let insName = "Pillar Institute";
  return (
    <>
      <h2>Parent Component</h2>
      <ChildComponent data={insName} instituteAddr={{ addr: "Noida" }} />
      <ChildComponent>New Text</ChildComponent>
      <ChildComponent>New Text 1</ChildComponent>
      <ChildComponent>New Text 2</ChildComponent>
    </>
  );
}
export default ParentComponent;
