import React from "react";
import { Grid } from "@material-ui/core";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import HotelBookCard from 'components/Card/HotelBookCard';
import FilterComponent from './FilterComponent';
import Pagination from '@material-ui/lab/Pagination';
import FilterListLoading from 'components/Loading/FilterListLoading';
import axios from 'Utils/Api';



export default function Components(props) {
  const { ...rest } = props;
  const [room_list, setRoomList] = React.useState([])
  const [page_no, setPageNo] = React.useState(0)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(()=>{
    const query = new URLSearchParams(props.location.search)
    handleFilter({place:[query.get('division'), query.get('district')]})
  },[])
  

  const handleFilter = (form_inputs)=>{
    setLoading(true)
    const query_data = new URLSearchParams(form_inputs).toString()
    axios.get('/rooms/?'+query_data)
      .then(resp => setRoomList(resp.data))
      .catch((error)=>console.log(error))
      .finally(()=>setLoading(false))
  }


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
              {!loading
                ? <React.Fragment>
                    {room_list.slice(10*page_no, 10*page_no+10).map(room => (
                      <HotelBookCard room={room}/>
                    ))}
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 25, marginBottom: 20}}>
                      <Pagination count={parseInt(room_list.length/10)+1} variant="outlined" color="secondary" onChange={(_, page)=>setPageNo(page-1)} />
                    </div>
                  </React.Fragment>
                : <FilterListLoading/>
              }
            </Grid>
            <Grid item xs>
              <FilterComponent handleFilter={handleFilter}/>
            </Grid>
          </Grid>
        </div>
      </div>

    </div>
  );
}
