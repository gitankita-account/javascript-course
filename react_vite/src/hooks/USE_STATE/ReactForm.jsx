import { Box, Button, Card, FormGroup, Paper, TextField } from "@mui/material";
import { useState } from "react";

function ReactForm() {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  console.log(user);
  return (
    <>
      <Paper component={Card} sx={{ width: 400, margin: "10px auto" }}>
        <form>
          <FormGroup>
            <TextField
              variant="outlined"
              sx={{ width: 300, margin: "10px auto" }}
              label="Please enter your name"
              name="fullname"
              onChange={handleChange}
              value={user.fullname}
            />
          </FormGroup>
          <FormGroup>
            <TextField
              variant="outlined"
              sx={{ width: 300, margin: "10px auto" }}
              label="Please enter your Email"
              name="email"
              value={user.email}
              onChange={handleChange}
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
