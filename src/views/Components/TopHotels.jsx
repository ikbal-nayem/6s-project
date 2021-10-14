import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HotelCard from 'components/Card/HotelCard';
import axios from 'Utils/Api';

import styles from "assets/jss/material-kit-react/views/componentsSections/bestHotels";

// import hotel_list from 'hotel_data';

const useStyles = makeStyles(styles);


export default ()=>{
  const classes = useStyles();
  const [hotel_list, setHotelList] = React.useState([])

  React.useEffect(()=>{
    axios.get('/hotels/')
      .then(resp => setHotelList(resp.data))
  },[])

  return(
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Best hotels in Bangladesh</h2>
        <GridContainer justify="center">
          {hotel_list.map(hotel => (
            <GridItem key={hotel.id} xs={12} sm={12} md={4} lg={3}>
              <HotelCard hotel={hotel}/>
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  )
}