import React from 'react';
import { useHistory } from 'react-router';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
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
  return `${option.locale_names[0]}, ${option?.administrative[1]?`${option?.administrative[1]},`:''} ${option?.administrative[0]}`
}


export default function SearchBox({use_in, onChange}) {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState([]);


  React.useEffect(() => {
    search_op['query'] = inputValue
    axios.post(algolia_url, search_op)
      .then(resp => setOptions(resp.data.hits))
  }, [inputValue]);


  const handleChange = (_, newValue)=>{
    setValue(newValue)
    if(use_in !== 'filter')
      history.push(`/search?district=${newValue?.administrative[1]||'all'}&division=${newValue?.administrative[0]}`)
    else onChange(newValue?.administrative)
  }

  
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
      onChange={handleChange}
      onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Search a location"
          style={{borderColor:'red'}}
          variant="filled"
          fullWidth
          size={use_in==='filter'?'small':'medium'}
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
