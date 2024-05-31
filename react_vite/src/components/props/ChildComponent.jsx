import PropTypes from "prop-types";

function ChildComponent(props) {
  // props={
  //     data:"Pillar Institute"
  //     data1 :"Ankita"
  //     instituteAddr :{
 //       addr:"Noida"
// }
//   }
  // }

  console.log(props)
  return (
    <>
      <h2>Child Component {props.data}</h2>
       <p>Institute Address :::: {props?.instituteAddr?.addr}</p>
    </>
  );
}

ChildComponent.propTypes = {
  data: PropTypes.string,
  instituteAddr:PropTypes.object
};

export default ChildComponent;
