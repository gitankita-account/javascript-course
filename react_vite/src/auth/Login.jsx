import { Button, Card, FormGroup, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { validateFunction } from "../utility/validation";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [userError, setUserError] = useState({
    email: "",
    password: "",
  });

  const [isDataDisplay, setIsDataDisplay] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    const error = validateFunction(name, value);
    // console.log(error.fullname, error.email, 292929);
    setUserError({ ...userError, [name]: error[name] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {};
    const { email, password } = user;
    if (email && password) {
      const userData = localStorage.getItem("user");
      const parsedUsertData = JSON.parse(userData);

      if (
        email === parsedUsertData.email &&
        password === parsedUsertData.password
      ) {
        localStorage.setItem("isAutenticated", "yes");
        navigate("/hooks/usestate");
      } else {
        localStorage.setItem("isAutenticated", "no");
        alert("Invalid email or password!");
      }
      setUser({ email: "", password: "" });
    } else {
      const userKeys = Object.keys(user);
      console.log(userKeys);
      userKeys.map((errorKey) => {
        if (user[errorKey] == "") {
          obj = { ...obj, [errorKey]: `${errorKey} is required` };
        }
      });
      setUserError(obj);
    }
  };

  return (
    <>
      <Paper component={Card} sx={{ width: 400, margin: "10px auto" }}>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <TextField
              error={userError.email || false}
              variant="outlined"
              sx={{ width: 300, margin: "10px auto" }}
              label="Please enter your Email"
              name="email"
              value={user.email}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={userError.email || null}
            />
          </FormGroup>

          <FormGroup>
            <TextField
              error={userError.password || false}
              variant="outlined"
              sx={{ width: 300, margin: "10px auto" }}
              label="Please enter your Password"
              name="password"
              value={user.password}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={userError.password || null}
            />
          </FormGroup>
          <FormGroup>
            <Button
              variant="contained"
              size="large"
              type="submit"
              sx={{
                width: 300,
                margin: "auto",
                display: "block",
                marginBottom: 2,
              }}
            >
              Login
            </Button>
          </FormGroup>
          <span>
            if you don't ave an account please{" "}
            <Link to={"/signup"}>Signup</Link>
          </span>
        </form>
        {/* <Tooltip id="my-tooltip" />; */}
      </Paper>
      {/* 
      {isDataDisplay ? (
        <Paper>
          <h2>{user.fullname}</h2>
          <h2>{user.email}</h2>
          <h2>{user.phone}</h2>
          <h2>{user.password}</h2>
        </Paper>
      ) : null} */}
    </>
  );
}
export default Login;
