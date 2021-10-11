import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HotelCard from 'components/Card/HotelCard';

import styles from "assets/jss/material-kit-react/views/componentsSections/bestHotels";

import hotel_list from 'hotel_data';

const useStyles = makeStyles(styles);

export default ()=>{
  const classes = useStyles();

  return(
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Best hotels in Bangladesh</h2>
        <GridContainer justify="center">
          {hotel_list.map(hotel => (
            <GridItem xs={12} sm={12} md={3}>
              <HotelCard hotel={hotel}/>
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  )
}
