import {
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
  TablePagination,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

const MuiTable = ({ posts, setIsEdit, fetchEditData }) => {
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [page, setPage] = useState(0);
  const onPageChangeHandler = (event, page) => {
    console.log(page);
    setPage(page);
  };
  const onRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sn.</TableCell>
              <TableCell>User id</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Body</TableCell>
              <TableCell>Button</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {posts.length ? (
              posts
                .slice(page * rowsPerPage, rowsPerPage * (page + 1))
                .map((post) => {
                  return (
                    <TableRow key={post.id}>
                      <TableCell>{post.id}</TableCell>
                      <TableCell>{post.userId}</TableCell>
                      <TableCell>{post.title}</TableCell>
                      <TableCell>{post.body}</TableCell>
                      <TableCell sx={{ display: "flex", gap: "10px" }}>
                        <Button variant="contained" color="error">
                          Delete
                        </Button>

                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            setIsEdit("edit");
                            fetchEditData(post);
                          }}
                        >
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })
            ) : (
              <TableRow key={posts.id}>
                <TableCell>{posts.id}</TableCell>
                <TableCell>{posts.userId}</TableCell>
                <TableCell>{posts.title}</TableCell>
                <TableCell>{posts.body}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <TablePagination
          count={posts.length}
          page={page}
          rowsPerPage={rowsPerPage}
          component="div"
          rowsPerPageOptions={[8, 10, 20, 40, 80, 100]}
          onPageChange={onPageChangeHandler}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      </TableContainer>
    </>
  );
};

MuiTable.propTypes = {
  posts: PropTypes.array,
};

export default MuiTable;
