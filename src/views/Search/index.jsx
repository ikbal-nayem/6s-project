import React from "react";
import { Grid } from "@material-ui/core";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import HotelBookCard from 'components/Card/HotelBookCard';
import FilterComponent from './FilterComponent';
import Pagination from '@material-ui/lab/Pagination';



import hotels from "hotel_data";


export default function Components(props) {
  const { ...rest } = props;
  const [hotel_list, setHotelList] = React.useState(hotels)
  const [page_no, setPageNo] = React.useState(0)
  

  return (
    <div>
      <Header
        brand="Hotel"
        rightLinks={<HeaderLinks />}
        fixed
        color="secondary"
        changeColorOnScroll={{
          height: 300,
          color: "white",
        }}
        {...rest}
      />

      <div style={{margin: "-60px 30px 0px"}}>
        <div style={{marginTop: 130}}>
          <Grid container spacing={3}>
            <Grid item xs={9}>
              {hotel_list.slice(10*page_no, 10*page_no+10).map(hotel => (
                <HotelBookCard hotel={hotel}/>
              ))}
              <div style={{display: 'flex', justifyContent: 'center', marginTop: 25, marginBottom: 20}}>
                <Pagination count={parseInt(hotel_list.length/10)+1} variant="outlined" color="secondary" onChange={(_, page)=>setPageNo(page-1)} />
              </div>
            </Grid>
            <Grid item xs>
              <FilterComponent/>
            </Grid>
          </Grid>
        </div>
      </div>

    </div>
  );
}
