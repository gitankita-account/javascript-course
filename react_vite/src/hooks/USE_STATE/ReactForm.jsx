import { Button, Card, FormGroup, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { validateFunction } from "../../utility/validation";

function ReactForm() {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });

  const [userError, setUserError] = useState({
    fullname: "",
    email: "",
    phone: "",
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
    const { fullname, email, password, phone } = user;
    if (fullname && email && password && phone) {
      setIsDataDisplay(true);
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
              error={userError.fullname || false}
              variant="outlined"
              sx={{ width: 300, margin: "10px auto" }}
              label="Please enter your name"
              name="fullname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={user.fullname}
              helperText={userError.fullname || null}
            />
          </FormGroup>
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
              variant="outlined"
              error={userError.phone || false}
              sx={{ width: 300, margin: "10px auto" }}
              label="Please enter your Phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={userError.phone || null}
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
              Submit
            </Button>
          </FormGroup>
        </form>
        {/* <Tooltip id="my-tooltip" />; */}
      </Paper>

      {isDataDisplay ? (
        <Paper>
          <h2>{user.fullname}</h2>
          <h2>{user.email}</h2>
          <h2>{user.phone}</h2>
          <h2>{user.password}</h2>
        </Paper>
      ) : null}
    </>
  );
}
export default ReactForm;
