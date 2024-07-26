import { FormGroup, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import MuiTable from "../../components/template/MuiTable";
import Modals from "../../components/modals/Modals";

function HooksUseEffect() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  const [post, setPost] = useState({
    userId: 11,
    title: "",
    body: "",
  });
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
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
    };
  }, [id]);

  // console.log(users);

  const handleChange = (e) => {
    const { value } = e.target;
    setId(value);
  };

  const postChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value, id: users.length + 1 });
  };

  const addPostHandler = () => {
    users.push(post);
    setUsers(users);
    setPost({ userId: 11, title: "", body: "" });
  };
  return (
    <>
      <Modals
        post={post}
        postChange={postChange}
        addPostHandler={addPostHandler}
      />
      <FormGroup>
        <TextField
          variant="outlined"
          sx={{ width: 300, margin: "10px auto" }}
          label="Please enter Id"
          onChange={handleChange}
        />
      </FormGroup>

      <MuiTable posts={users} />
    </>
  );
}

export default HooksUseEffect;
