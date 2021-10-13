import React from 'react';
import { useLocation } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { TextField, Slider, FormControl } from '@material-ui/core';
import SearchBox from 'components/CustomInput/SearchBox';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  center: {
    display: 'flex',
    justifyContent: 'center'
  }
});

export default function FilterComponent({handleFilter}) {
  const classes = useStyles();
  const query = new URLSearchParams(useLocation().search)
  const [form_inputs, setFormInputs] = React.useState({rent_range: [100, 10000], place: [query.get('division'), query.get('district')]})

  const handleLocationChange = (new_loc)=>{
    handleChange({target: {name: 'Place', value: new_loc}})
  }

  const handleChange = (e)=>{
    const name = e.target.name
    const new_inputs = {...form_inputs, [name]: e.target.value}
    setFormInputs(new_inputs)
    handleFilter(new_inputs)
  }


  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography color="textSecondary" gutterBottom>Filter options</Typography>
        <SearchBox use_in="filter" onChange={handleLocationChange}/>
        <TextField
          label="Chack In"
          size="small"
          type="date"
          margin="normal"
          name="check_in"
          fullWidth
          onChange={handleChange}
          InputLabelProps={{shrink: true}}
        />
        <TextField
          label="Check Out"
          size="small"
          type="date"
          margin="normal"
          fullWidth
          name="check_out"
          onChange={handleChange}
          InputLabelProps={{shrink: true}}
        />
        <FormControl margin="normal" fullWidth>
          <Typography id="range-slider" gutterBottom>
            Rent Range :: <strong>{form_inputs.rent_range[0]} - {form_inputs.rent_range[1]}</strong>
          </Typography>
          <Slider
            value={form_inputs.rent_range}
            onChange={(_, new_val)=>handleChange({target:{name: 'rent_range', value: new_val}})}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            max={10000}
            min={200}
            step={200}
          />
        </FormControl>
      </CardContent>
    </Card>
  );
}
