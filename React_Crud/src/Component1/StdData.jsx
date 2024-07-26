import ProTypes from "prop-types"

function StdData(props){

return (
    <div>
       
        <table className="table table-success table-striped">
            <thead>
                <tr>
                    <th>Sno.</th>
                    <th>Student Name</th>
                    <th>Class</th>
                    <th>Attendence</th>
                </tr>
            </thead>
            <tbody>
                {
              props.Studentdata.map((std, i)=>{
               
                return (
                    <tr key={std.std_id}>
                      <td>{i + 1}</td>
                      <td>{std.std_name}</td>
                      <td>{std.std_class}</td>
                      <td>{std.std_attendence}</td>
                    </tr>
                  );
              })}
                
               
            </tbody>
        </table>
    </div>
);
}

StdData.prototype = {
    Studentdata: ProTypes.object
} 

export default StdData;