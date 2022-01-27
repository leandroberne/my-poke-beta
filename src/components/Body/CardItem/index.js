import React from 'react';
import { CardItemLayout } from './style';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
//quitar esto
import ImageChar from '../../../assets/charmander.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function CardItem() {
  const classes = useStyles();
  return (
    <CardItemLayout>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={ImageChar}
            title='Contemplative Reptile'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Charmander
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </CardItemLayout>
  );
}

export default CardItem;
