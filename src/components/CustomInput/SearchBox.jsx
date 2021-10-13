import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import parse from 'autosuggest-highlight/parse';
import axios from 'axios';
import './override.css'




const algolia_url = 'https://places-dsn.algolia.net/1/places/query'

let search_op = {
  type: 'city',
  hitsPerPage: 10,
  language: 'en',
  countries: ['bd']
}



const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    maxWidth: '500px'
  },
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  }
}));


const optionString = (option)=>{
  return `${option.locale_names[0]}, ${option.administrative[1]?`${option.administrative[1]},`:''} ${option.administrative[0]}`
}


export default function SearchBox() {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState([]);


  React.useEffect(() => {
    search_op['query'] = inputValue
    axios.post(algolia_url, search_op)
      .then(resp => setOptions(resp.data.hits))
  }, [inputValue]);

  return (
    <Autocomplete
      getOptionLabel={(option) => (typeof option === 'string' ? option : optionString(option))}
      filterOptions={(x) => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      className={classes.root}
      value={value}
      onChange={(_, newValue) => setValue(newValue)}
      onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search a location"
          style={{borderColor:'red'}}
          variant="filled"
          fullWidth
        />
      )}
      renderOption={(option) => {
        return (
          <Grid container alignItems="center">
            <Grid item>
              <LocationOnIcon className={classes.icon} />
            </Grid>
            <Grid item xs>
              {optionString(option)}
            </Grid>
          </Grid>
        );
      }}
    />
  );
}
