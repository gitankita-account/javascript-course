import { Card, FormGroup, Paper, TextField, Button } from "@mui/material";
import { useState } from "react";
import { inputFunction } from "../../Validation/Valid";

function ReactForm() {
  const [user, setUser] = useState({
    fullname: "",
    email:    "",
    phone:    "",
    pwd:      "",
  });

  const [usererrors, setUserErrors] = useState({
    fullname: "",
    email: "", 
    phone: "",
    pwd: "",
  });


  
  // passing the event (e) to get input field's value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  console.log(user);

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = inputFunction(name, value);
    // console.log(error);
    setUserErrors({
      ...usererrors, [name] : error[name]
    })
  };
    


  const handleSubmit = (e) =>{
    e.preventDefault();
    let obj = {};
    const {fullname, email, phone, pwd} = user
    if(fullname && email && phone && pwd) {
      // console.log(user);
    }else{
      const userKeys = Object.keys(user);
      console.log(userKeys);
      userKeys.map((errorKey) =>{
        if(user[errorKey] == "") {
          obj = {... obj, [errorKey] : `${errorKey} is required`}
        }
      })
      setUserErrors(obj);
    }
  }

  return (
    <>
      <h2>Contact From</h2>
      <Paper component={Card} sx={{ width: 400, margin: "10px auto" }}>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <TextField
              variant="filled"
              sx={{ width: 300, margin: "10px auto" }}
              label="Please enter your name"
              name="fullname"
              value={user.fullname}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={usererrors.fullname || null}

            />
          </FormGroup>

          <FormGroup>
            <TextField
              variant="filled"
              sx={{ width: 300, margin: "10px auto" }}
              label="Please enter your Email"
              name="email"
              value={user.email}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={usererrors.email || null}

            />
          </FormGroup>

          <FormGroup>
            <TextField
              variant="filled"
              sx={{ width: 300, margin: "10px auto" }}
              label="Please enter your Phone"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={usererrors.phone || null}

            />
          </FormGroup>

          <FormGroup>
            <TextField
              variant="filled"
              sx={{ width: 300, margin: "10px auto" }}
              label="Please enter your Password"
              name="pwd"
              value={user.pwd}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={usererrors.pwd || null}

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
      </Paper>

    <h3>{user.fullname}</h3>
    <h3>{user.email}</h3>
    <h3>{user.phone}</h3>
    <h3>{user.pwd}</h3>
    </>
  );
}

export default ReactForm;
