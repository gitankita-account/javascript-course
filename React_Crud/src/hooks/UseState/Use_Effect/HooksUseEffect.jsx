import {
  Button,
  FormGroup,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TextField,
  Paper,
  Card,
  Box,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
// import ParentEffectComponent from "../../../Component  2/Props 2/ParentEffectComponent"
import PaginationTable from "../../../Pagination/PaginationTable";
import AddModal from "../../../Model/AddModal";

function HooksUseEffect() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  const [addData, setaddData] = useState({
    userId: "",
    title: "",
    content: "",
  });
  
  const [addDataError, setaddDataError] = useState({
    userId: "",
    title: "",
    content: "",
  })

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setUsers(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    return () => {
      setUsers([]);
    };
  }, [id]);

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setId(value);
  // };

  console.log(users, "user_data");

  const handleDelete = (tableId) => {
    const updatedData = users.filter((post) => {
      return post.id !== tableId;
    });

    setUsers(updatedData);
    console.log(updatedData, "deleted");
  };
   
// Add data code====================================================>
  function addForm(inputid) {
    let error = {};

    if (inputid === "userId") {
      error[inputid] = "";
    } else {
      error[inputid] = `${inputid} is required`;
    }

    if (inputid === "ID") {
      error[inputid] = "";
    } else {
      error[inputid] = `${error} is required`;
    }

    if (inputid === "title") {
      error[inputid] = "";
    } else {
      error[inputid] = `${error} is required`;
    }

    if (inputid === "content") {
      error[inputid] = "";
    } else {
      error[inputid] = `${error} is required`;
    }
    return error;
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setaddData({ ...addData, [name]: value });
  };
  console.log(addData);

  const handleBlur = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const error = addForm(name, value);
    console.log(error);
  setaddDataError[{
    ...addDataError, [name]: error[value]
  }]
  };

const handleAdd = (e) =>{
  e.preventDefault();
  users.push(addData);
  setaddData("")

}

    return (
    <>
      <h2>Use Effect</h2>
      <br />
      <br />
      <br />

      {/* <ParentEffectComponent users = {users}/> */}

      <FormGroup>
        <TextField
          variant="outlined"
          sx={{ width: 200, margin: "10px auto" }}
          label="Enter Id"
          // onChange={handleChange}
        ></TextField>
      </FormGroup>
      <AddModal add = {addData} />
      <PaginationTable posts={users} handleDelete={handleDelete} />
    </>
  );
}

export default HooksUseEffect;

// axios =>  helps is fetching the data
// whenever we use api need to handle promises along with with this
