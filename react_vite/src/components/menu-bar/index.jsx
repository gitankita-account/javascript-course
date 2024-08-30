import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const CustomNavLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => {
        return {
          color: isActive && "grey",
        };
      }}
    >
      {children}
    </NavLink>
  );
};

const MenuBar = () => {
  return (
    <>
      <div className="menu-bar-component">
        <ul className="menu-bar-ul">
          <CustomNavLink to={"/hooks/usestate"}>
            <li>UseState</li>
          </CustomNavLink>
          <CustomNavLink to={"/hooks/posts"}>
            <li>UseEffect</li>
          </CustomNavLink>
          <CustomNavLink to={"/hooks/usecontext"}>
            <li>UseContext</li>
          </CustomNavLink>
          <CustomNavLink to={"/hooks/usereducer"}>
            <li>UseReducer</li>
          </CustomNavLink>
          <CustomNavLink to={"/hooks/useref"}>
            <li>UseRef</li>
          </CustomNavLink>

          <CustomNavLink to={"/hooks/class_component"}>
            <li>Class Component</li>
          </CustomNavLink>

          <CustomNavLink to={"/settings/change-password"}>
            Redirect to settings
          </CustomNavLink>

          <Link to={"/"}>Logout</Link>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MenuBar;
