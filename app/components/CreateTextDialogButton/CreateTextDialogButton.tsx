import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export const CreateTextDialogButton = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button size="large" variant="contained" color="primary" onClick={handleClickOpen}>作成</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: "#ffffff",
            width: "100%",
          },
        }}
      >
        <DialogContent>
          <TextField
            variant="outlined"
            multiline
            fullWidth
            placeholder="ルパンタイトルメーカー"
            color='info'
          />
        </DialogContent>
        <DialogActions>
          {/* ボタンの調整から再開 */}
          <Button type="submit" color='secondary'>作成</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
