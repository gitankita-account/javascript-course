import PropTypes from "prop-types"

function EffectData(props) {
  return (
    <div>
      <table className="table table-success table-striped">
      <thead>
                <tr>
                    <th>S.No</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
        <tbody>
        {
              props.users.map((std, i)=>{
               
                return (
                    <tr key={std.userId}>
                      <td>{i + 1}</td>
                      <td>{std.title}</td>
                      <td>{std.body}</td>
                    </tr>
                  );
              })}
        </tbody>
      </table>
    </div>
  );
  
  EffectData.propTypes = {
    users: PropTypes.object
} 

}

export default EffectData
