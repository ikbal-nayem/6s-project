import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Phone, LocationOn } from '@material-ui/icons';
import Skeleton from '@material-ui/lab/Skeleton';


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
  align: {
    display: 'flex',
  },
}));


export default function filterListLoading() {
  const classes = useStyles();

  return (
    [...Array(3)].map(()=>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container >
            <Grid item>
              <Skeleton variant="rect" width={150} height="100%" />
            </Grid>
            <Grid item xs={12} sm container className={classes.details}>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h4">
                    <Skeleton animation="wave" variant="text" />
                  </Typography>
                  <Rating name="read-only" value={5} readOnly precision={0.5} size="small" />
                  <Typography variant="body3" className={classes.align}>
                    <LocationOn fontSize="small"/> <Skeleton width={250} variant="text" />
                  </Typography>
                  <Typography variant="body2" color="secondary" className={classes.align}>
                    <Phone fontSize="small"/> <Skeleton width={150} variant="text" />
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    )
  );
}
