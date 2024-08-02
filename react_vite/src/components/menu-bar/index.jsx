import { Link } from "react-router-dom";
const MenuBar = () => {
  return (
    <div className="menu-bar-component">
      <ul className="menu-bar-ul">
        <Link to={"/"}>
          <li>UseState</li>
        </Link>
        <Link to={"/posts"}>
          <li>UseEffect</li>
        </Link>
        <Link to={"/usecontext"}>
          <li>UseContext</li>
        </Link>
        <Link to={"/usereducer"}>
          <li>UseReducer</li>
        </Link>
        <Link to={"/useref"}>
          <li>UseRef</li>
        </Link>
      </ul>
    </div>
  );
};

export default MenuBar;
