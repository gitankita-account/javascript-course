import employeeData from "../../fakedb/db.json";

function ArrayDataDisplay() {
  console.log(employeeData);
  return (
    <div>
      <h2>Employee Name list</h2>

      {/* list */}
      <ol>
        {/* <li>{employeeData[0].emp_name}</li>
        <li>{employeeData[1].emp_name}</li>
        <li>{employeeData[2].emp_name}</li> */}
        {employeeData.map((emp) => {
          return (
            <li key={emp.emp_id}>
              <p>{emp.emp_name}</p>
              <p>{emp.emp_designation}</p>
              <p>{emp.emp_salary}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
export default ArrayDataDisplay;
