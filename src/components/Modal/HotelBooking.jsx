import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, Chip, Grid, TextField } from '@material-ui/core';


export default ()=>{
  const [open, setOpen] = React.useState()

  const handleClose = ()=> setOpen(false)

  return(
    <React.Fragment>
      <Chip label="Book Now" color="secondary" size="small" clickable onClick={()=>setOpen(true)}/>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        scroll="body"
      >
        <DialogTitle id="alert-dialog-title">Guest Information</DialogTitle>
        <DialogContent>
          <div style={{marginRight: 12}}>
            <Grid xs container spacing={3}>
              <Grid item md={12}>
                <TextField
                  label="Guest Name"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Phone number"
                  size="small"
                  type="number"
                  fullWidth
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Email"
                  size="small"
                  type="email"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  size="small"
                  fullWidth
                  multiline
                  rows="2"
                />
              </Grid>
            </Grid>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Book Now
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}