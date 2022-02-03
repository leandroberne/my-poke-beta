import React from 'react';
import { CardItemLayout } from './style';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 200,
    width: 200,
  },
});

function CardItem({ pokemon, hacerClick }) {
  let zeros = '';
  let pId = '';
  let arrayId = pokemon.url.split('');

  if (arrayId.length === 36) {
    zeros = '00';
    pId = `${arrayId[34]}`;
  } else if (arrayId.length === 37) {
    zeros = 0;
    pId = `${arrayId[34]}${arrayId[35]}`;
  } else {
    pId = `${arrayId[34]}${arrayId[35]}${arrayId[36]}`;
  }

  const classes = useStyles();
  const urlImage = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/`;

  return (
    <CardItemLayout>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={urlImage + zeros + pId + '.png'}
            title='Contemplative Reptile'
            onClick={() => {
              hacerClick(pokemon);
            }}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {pokemon.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </CardItemLayout>
  );
}

export default CardItem;
