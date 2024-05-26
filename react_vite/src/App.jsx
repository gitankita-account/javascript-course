function App() {
  let myname = "Ritesh";
  return <h2>My name is {myname}</h2>;
}

function AppOne() {
  let type = "Un ordered List";
  return (
    <div>
      <button>New Change</button>
      <h2>This is AppOne Function {type}</h2>
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </ul>
    </div>
  );
}

//  default and naming -> these are the types of exports
// Note :-only one function can be default export fron single file all other will be naming export

export default App;

// naming export
export { AppOne };
