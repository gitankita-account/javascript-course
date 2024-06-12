import CustomTable from "../template/CustomTable";
import employeeData from "../../fakedb/db.json";
function EmployeeData() {
  // parent
  return (
    <>
      <CustomTable employeeData={employeeData} />
    </>
  );
}
export default EmployeeData;
