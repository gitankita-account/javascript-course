import { FormGroup, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import MuiTable from "../../components/template/MuiTable";
import Modals from "../../components/modals/Modals";
import EditModal from "../../components/modals/EditModal";

function HooksUseEffect() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  const [isEdit, setIsEdit] = useState("");
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
    if (isEdit === "edit") {
      setPost({ ...post, [name]: value });
    } else {
      setPost({ ...post, [name]: value, id: users.length + 1 });
    }
  };

  const addPostHandler = () => {
    users.push(post);
    setUsers(users);
    setPost({ userId: 11, title: "", body: "" });
  };

  const editPostHandler = () => {
   
    const restData = users.map((user) => {
      if (user.id === post.id) {
        return post;
      } else {
        return user;
      }
    });
    console.log(restData, "677");
    setUsers(restData);
  };

  const fetchEditData = (editpost) => {
    setPost(editpost);
  };
  return (
    <>
      <Modals
        post={post}
        postChange={postChange}
        addPostHandler={addPostHandler}
      />

      {isEdit === "edit" && (
        <EditModal
          setIsEdit={setIsEdit}
          post={post}
          handleChange={postChange}
          addPostHandler={editPostHandler}
        />
      )}
      <FormGroup>
        <TextField
          variant="outlined"
          sx={{ width: 300, margin: "10px auto" }}
          label="Please enter Id"
          onChange={handleChange}
        />
      </FormGroup>

      <MuiTable
        posts={users}
        setIsEdit={setIsEdit}
        fetchEditData={fetchEditData}
      />
    </>
  );
}

export default HooksUseEffect;
