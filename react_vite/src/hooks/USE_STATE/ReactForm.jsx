import { Button, Card, FormGroup, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { validateFunction } from "../../utility/validation";

function ReactForm() {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
  });

  const [userError, setUserError] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
  });

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

  return (
    <>
      <Paper component={Card} sx={{ width: 400, margin: "10px auto" }}>
        <form>
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
              sx={{ width: 300, margin: "10px auto" }}
              label="Please enter your Phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <TextField
              variant="outlined"
              sx={{ width: 300, margin: "10px auto" }}
              label="Please enter your Password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Button
              variant="contained"
              size="large"
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
      </Paper>
    </>
  );
}
export default ReactForm;
