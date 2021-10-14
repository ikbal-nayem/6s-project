import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {LocationOn, Phone} from '@material-ui/icons';
import Rating from '@material-ui/lab/Rating';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 20
  },
  details: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center'
  }
});

export default function HotelCard({hotel}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={hotel.name}
          height="140"
          image={hotel.image}
          title={hotel.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {hotel.name}
          </Typography>
          <Rating name="read-only" value={hotel.rating} readOnly precision={0.5} size="small" />
          <Typography variant="body3" color="textSecondary" component="p" className={classes.details}>
            <LocationOn fontSize="small"/> {hotel.address}
          </Typography>
          <Typography variant="body2" color="secondary" component="p" className={classes.details}>
            <Phone fontSize="small"/> {hotel.phone}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.buttons}>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
