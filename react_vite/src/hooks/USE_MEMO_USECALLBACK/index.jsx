import { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Buttons from "./Buttons";

export default function Index() {
  const [salary, setSalary] = useState(50000);
  const [age, setAge] = useState(10);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 10000);
  }, [salary]);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const isEligible = () => {
    let i = 0;
    while (i <= 2000) {
      age >= 18;
      i++;
    }
  };

  return (
    <>
      {/* salary */}
      <Title title={"Age & salary"} />
      <Count count={salary} />
      <Buttons handleClick={incrementSalary}>Increment Salary</Buttons>
      {isEligible() ? <h1>User is Eligible</h1> : <h1>User is not Eligible</h1>}
      {/* Age */}
      <Count count={age} />
      <Buttons handleClick={incrementAge}>Increment Age</Buttons>
    </>
  );
}
