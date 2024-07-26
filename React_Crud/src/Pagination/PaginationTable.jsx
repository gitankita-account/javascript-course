import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import PropTypes from "prop-types";

function PaginationTable({ posts, handleDelete }) {


  return (
    <>
       

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>userId</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Body</TableCell>
              <TableCell>Button</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts?.map((post) => {
              return (
                <TableRow key={post.id}>
                  <TableCell>{post.userId}</TableCell>
                  <TableCell>{post.id}</TableCell>
                  <TableCell>{post.title}</TableCell>
                  <TableCell>{post.body}</TableCell>
                  <TableCell sx={{ display: "flex", gap: "15px" }}>
                    <Button variant="contained" color="error" onClick={() => handleDelete(post.id)}>
                      Delete
                    </Button>

                    <Button variant="contained" color="primary">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

PaginationTable.propTypes = {
  posts: PropTypes.array,
};

export default PaginationTable;
