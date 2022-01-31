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
    maxWidth: 360,
  },
  media: {
    height: 160,
  },
});

function CardItem({ pokemon }) {
  const classes = useStyles();
  let zeros = '';
  if (pokemon.id <= 9) {
    zeros = '00';
  } else if (pokemon.id <= 99) {
    zeros = 0;
  }

  return (
    <CardItemLayout>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={
              window.location.origin +
              '/imagenes/' +
              zeros +
              pokemon.id +
              '.png'
            }
            title='Contemplative Reptile'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {pokemon.name.english}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </CardItemLayout>
  );
}

export default CardItem;
