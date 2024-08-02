import "./assets/style/App.css";
import EmployeeData from "./components/props/EmployeeData";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-tooltip/dist/react-tooltip.css";
// import ArrayDataDisplay from "./components/basic-component/ArrayDataDisplay";
// import ParentComponent from "./components/props/ParentComponent";
import HooksUseState from "./hooks/USE_STATE/HooksUseState";
import ReactForm from "./hooks/USE_STATE/ReactForm";
import HooksUseEffect from "./hooks/USE_EFFECT/HooksUseEffect";
import HooksUseContext from "./hooks/USE_CONTEXT/HooksUseContext";
import Index from "./hooks/USE_MEMO_USECALLBACK";
import HooksUseReducer from "./hooks/USE_REDUCER/HooksUseReducer";
import HooksUseRef from "./hooks/USE_REF/HooksUseRef";
import Router from "./routing";
import "./assets/style/menu-bar.css";
function App() {
  const dt = new Date();
  let title = "";

  let styleObj = {
    color: "darkblue",
    backgroundColor: "grey",
    width: "300px",
    margin: "auto",
    textAlign: "center",
  };

  if (dt.getHours() < 12) {
    title = "Morning";
  } else if (dt.getHours() >= 12 && dt.getHours() < 16) {
    title = "Afternoon";
  } else if (dt.getHours() >= 16 && dt.getHours() < 20) {
    title = "Evening";
  } else {
    title = "night";
  }
  // console.log(dt.getHours());

  return (
    <div>
      {/* <h1 style={styleObj}>Good {title}</h1> */}
      {/* <EmployeeData /> */}
      {/* <ArrayDataDisplay />
      <ParentComponent /> */}
      {/* <HooksUseState /> */}
      {/* <ReactForm /> */}
      {/* <HooksUseEffect /> */}
      {/* <HooksUseContext /> */}
      {/* <Index /> */}

      {/* <HooksUseReducer /> */}
      {/* <HooksUseRef /> */}
      {/* <h2>My name is {myname}</h2> */}

      {/* <button
        className="btn"
        onClick={() => {
          console.log("CLick inside return");
        }}
      >
        click
      </button>
      <p>
        <b>Year::-</b>

        {" " + dt.getFullYear()}
      </p> */}
      <Router />
    </div>
  );
}

// function AppOne() {
//   let type = "Un ordered List";
//   return (
//     <div>
//       <button>New Change</button>
//       <h2>This is AppOne Function {type}</h2>
//       <ul>
//         <li>One</li>
//         <li>Two</li>
//         <li>Three</li>
//       </ul>
//     </div>
//   );
// }

//  default and naming -> these are the types of exports
// Note :-only one function can be default export fron single file all other will be naming export

export default App;

// naming export
// export { AppOne };
