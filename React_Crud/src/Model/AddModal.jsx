import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Card, FormGroup, Paper } from "@mui/material";
import PropTypes from "prop-types";

function AddModal({ add, handleChange, handleBlur, handleAdd, addDataError }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        sx={{ textAlign: "end" }}
        onClick={handleClickOpen}
      >
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            handleClose();
          },
        }}
      >
        <DialogContent>
          <DialogContentText></DialogContentText>

          <Paper component={Card} sx={{ width: 400, margin: "10px auto" }}>
            <form>
              <FormGroup>
                <TextField
                  variant="filled"
                  sx={{ width: 300, margin: "10px auto" }}
                  label="Please enter userid"
                  name="userId"
                  value={add.userId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={addDataError.userId || null}
                />
              </FormGroup>

              <FormGroup>
                <TextField
                  variant="filled"
                  sx={{ width: 300, margin: "10px auto" }}
                  label="Please enter id"
                  name="id"
                  value={add.id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </FormGroup>

              <FormGroup>
                <TextField
                  variant="filled"
                  sx={{ width: 300, margin: "10px auto" }}
                  label="Please enter title"
                  name="title"
                  value={add.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={addDataError.title || null}
                />
              </FormGroup>

              <FormGroup>
                <TextField
                  variant="filled"
                  sx={{ width: 300, margin: "10px auto" }}
                  label="Please enter Body"
                  name="body"
                  value={add.body}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={addDataError.content || null}
                />
              </FormGroup>
            </form>
          </Paper>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleAdd}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

AddModal.propTypes = {
  add: PropTypes.object,
};
export default AddModal;
