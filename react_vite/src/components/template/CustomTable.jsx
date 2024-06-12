import PropType from "prop-types";
function CustomTable(props) {
  return (
    <div className="card">
      <div className="card-header">Employee Data</div>
      <div className="card-body">
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th>S/no</th>
              <th>Employee name</th>
              <th>Designation</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {props.employeeData.map((employee, i) => {
              return (
                <tr key={employee.emp_id}>
                  <td>{i + 1}</td>
                  <td>{employee.emp_name}</td>
                  <td>{employee.emp_designation}</td>
                  <td>{employee.emp_salary}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

CustomTable.propTypes = {
  employeeData: PropType.object,
};

export default CustomTable;
