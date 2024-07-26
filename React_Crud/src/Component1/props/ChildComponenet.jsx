import PropTypes from "prop-types"

function ChildComponenet(props){  
    return(
        <div>
            <h2>ChildComponent : {props.arr1}</h2>
            <h2>String type : {props.str}</h2>
            <h2>Object type : {props.obj1.one}</h2>
            {/* <h3>Variable type : {props.boolean}</h3> */}
        </div>
    )
}

ChildComponenet.prototype = {
    arr1: PropTypes.array,
    str: PropTypes.string,
    one: PropTypes.object,
    // boolean PropTypes.boolean

}

export default ChildComponenet