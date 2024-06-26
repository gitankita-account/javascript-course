import { FormGroup, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function HooksUseEffect() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();

    return () => {
      setUsers([]);
      setId("");
    };
  }, [id]);

  console.log(users);

  const handleChange = (e) => {
    const { value } = e.target;
    setId(value);
  };
  return (
    <>
      <FormGroup>
        <TextField
          variant="outlined"
          sx={{ width: 300, margin: "10px auto" }}
          label="Please enter Id"
          onChange={handleChange}
        />
      </FormGroup>
    </>
  );
}

export default HooksUseEffect;
