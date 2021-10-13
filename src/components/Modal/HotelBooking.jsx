import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, Chip, Grid, TextField } from '@material-ui/core';


export default ()=>{
  const [open, setOpen] = React.useState()
  const [form_inputs, setFormInputs] = React.useState({})

  const handleClose = ()=> setOpen(false)

  const handleChange = (e)=>{
    setFormInputs({...form_inputs, [e.target.name]: e.target.value})
  }

  const handleSubmit = ()=>{
    console.log(form_inputs)
  }

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
        <DialogTitle id="alert-dialog-title" style={{textAlign: 'center'}}>Guest Information</DialogTitle>
        <DialogContent>
          <div style={{margin: 15}}>
            <Grid xs container spacing={3}>
              <Grid item md={12}>
                <TextField
                  label="Guest Name"
                  size="small"
                  name="g_name"
                  fullWidth
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Phone number"
                  name="g_phone"
                  size="small"
                  type="number"
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Email"
                  name="g_email"
                  size="small"
                  type="email"
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  name="g_address"
                  size="small"
                  fullWidth
                  multiline
                  rows="2"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </div>
        </DialogContent>
        <DialogActions style={{justifyContent: 'center'}}>
          <Button onClick={handleClose} size="small" variant="outlined" color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} size="small" variant="contained" color="secondary">
            Book Now
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}