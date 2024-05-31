import "./assets/style/App.css";
import ArrayDataDisplay from "./components/basic-component/ArrayDataDisplay";
import ParentComponent from "./components/props/ParentComponent";
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
  console.log(dt.getHours());

  return (
    <div>
      <h1 style={styleObj}>Good {title}</h1>

      <ArrayDataDisplay />
      <ParentComponent />
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
