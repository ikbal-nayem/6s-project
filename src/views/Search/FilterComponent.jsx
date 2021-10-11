import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { InputAdornment, TextField, Slider, FormControl } from '@material-ui/core';
import { LocationOnOutlined } from '@material-ui/icons';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  center: {
    display: 'flex',
    justifyContent: 'center'
  }
});

export default function FilterComponent() {
  const classes = useStyles();
  const [rent_range, setRentRange] = React.useState([100, 1000])


  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>Filter options</Typography>
        <TextField
          label="Location"
          size="small"
          margin="normal"
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="start"><LocationOnOutlined fontSize="small"/></InputAdornment>,
          }}
        />
        <TextField
          label="Chack In"
          size="small"
          type="date"
          margin="normal"
          fullWidth
          InputLabelProps={{shrink: true}}
        />
        <TextField
          label="Check Out"
          size="small"
          type="date"
          margin="normal"
          fullWidth
          InputLabelProps={{shrink: true}}
        />
        <FormControl margin="normal" fullWidth>
          <Typography id="range-slider" gutterBottom>
            Rent Range :: <strong>{rent_range[0]} - {rent_range[1]}</strong>
          </Typography>
          <Slider
            value={rent_range}
            onChange={(_, new_val)=>setRentRange(new_val)}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            max={10000}
            min={100}
            step={100}
          />
        </FormControl>
      </CardContent>
      <CardActions className={classes.center}>
        <Button variant="outlined" size="small">Apply</Button>
      </CardActions>
    </Card>
  );
}
