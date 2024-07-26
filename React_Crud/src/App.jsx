// import StdData from "./Component1/StdData"
import "bootstrap/dist/css/bootstrap.min.css" 
// import TryEffect from "./hooks/UseState/Use_Effect/TryEffect"
import HooksUseEffect from "./hooks/UseState/Use_Effect/HooksUseEffect"
// import ParentEffectComponent from "./Component  2/Props 2/ParentEffectComponent"
// import EffectData from "./Component  2/EffectData"
// import ParentComponent from "./Component1/props/ParentComponent"
// import HooksUseState from "./hooks/UseState/HooksUseState"
// import ReactForm from "./hooks/UseState/ReactForm"
import PaginationTable from "./Pagination/PaginationTable"

function App(){
    return(
        <div>
            {/* <h2>This is reactjs Course</h2> */}
        {/* <StdData/> */}
        {/* <ParentComponent/> */}
        {/* <HooksUseState /> */}
        {/* {<ReactForm />} */}

         <HooksUseEffect/>
         {/* <ParentEffectComponent/> */}
         {/* <EffectData/> */}
         {/* <TryEffect /> */}
         <PaginationTable />
        </div>
    )
}

export default App