import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Phone, LocationOn } from '@material-ui/icons';
import { Chip } from '@material-ui/core';
import HotelBooking from 'components/Modal/HotelBooking';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 10
  },
  paper: {
    margin: 'auto',
    maxWidth: 700,
  },
  details: {
    padding: theme.spacing(2),
  },
  image: {
    width: 150,
    height: 150,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
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


export default function HotelBookCard({hotel}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container >
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="hotel" src={hotel.image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container className={classes.details}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {hotel.name}
                </Typography>
                <Rating name="read-only" value={hotel.rating} readOnly precision={0.5} size="small" />
                <Typography variant="body3" color="textSecondary" component="p" className={classes.align}>
                  <LocationOn fontSize="small"/> {hotel.location}
                </Typography>
                <Typography variant="body2" color="secondary" component="p" className={classes.align}>
                  <Phone fontSize="small"/> {hotel.phone}
                </Typography>
              </Grid>
            </Grid>
            <Grid item className={classes.alignEnd}>
              <Typography variant="subtitle1">$19.00</Typography>
              <HotelBooking/>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
