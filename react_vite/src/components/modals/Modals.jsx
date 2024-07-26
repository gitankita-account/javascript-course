import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FormGroup } from "@mui/material";

function Modals({ post, postChange, addPostHandler }) {
  const [open, setOpen] = React.useState(false);
  const { userId, title, body } = post;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Add Post</DialogTitle>
        <DialogContent>
          <form>
            <FormGroup>
              <TextField
                autoFocus
                required
                margin="dense"
                name="userId"
                label="User Id"
                type="text"
                value={userId}
                onChange={postChange}
                fullWidth
                variant="standard"
              />
            </FormGroup>

            <FormGroup>
              <TextField
                autoFocus
                required
                margin="dense"
                name="title"
                label="Title"
                type="text"
                value={title}
                fullWidth
                onChange={postChange}
                variant="standard"
              />
            </FormGroup>

            <FormGroup>
              <TextField
                autoFocus
                required
                margin="dense"
                name="body"
                label="body"
                type="text"
                value={body}
                fullWidth
                onChange={postChange}
                variant="standard"
              />
            </FormGroup>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={addPostHandler}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export default Modals;
