import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Phone, LocationOn, HotelTwoTone, PeopleAltTwoTone } from '@material-ui/icons';
import HotelBooking from 'components/Modal/HotelBooking';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 10
  },
  paper: {
    margin: 'auto',
    maxWidth: 700,
    overflow: 'hidden'
  },
  details: {
    padding: theme.spacing(2),
  },
  image: {
    width: 180,
    height: '100%',
  },
  img: {
    margin: 'auto',
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  align: {
    display: 'flex',
    alignItems: 'center'
  },
  alignEnd: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}));


export default function HotelBookCard({room}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container >
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="hotel" src={room.hotel.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container className={classes.details}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {room.hotel.name}
                </Typography>
                <Rating name="read-only" value={room.hotel.rating} readOnly precision={0.5} size="small" />
                <Typography variant="body3" color="textSecondary" component="p" className={classes.align}>
                  <LocationOn fontSize="small"/> {room.hotel.address}
                </Typography>
                <Typography variant="body2" color="secondary" component="p" className={classes.align}>
                  <Phone fontSize="small"/> {room.hotel.phone}
                </Typography>
                <Grid container xs spacing={3}>
                  <Grid item xs={4}>
                    <small style={{marginLeft: 4}} className={classes.align}>
                      <HotelTwoTone fontSize="small"/> &nbsp; {room.number_of_bed}
                    </small>
                  </Grid>
                  <Grid item>
                    <small className={classes.align}>
                      <PeopleAltTwoTone fontSize="small"/> &nbsp; {room.max_guest_allow}
                    </small>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.alignEnd}>
              <Typography variant="subtitle1">৳ {room.rent}</Typography>
              <HotelBooking/>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
