import React from 'react';
import { NavigatorLayout, InputSearch } from './style';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Navigator({ prevPage, nextPage, pageNumber, maximo }) {
  const classes = useStyles();
  const anterior = '< Anterior';
  const siguiente = 'Siguiente >';
  return (
    <NavigatorLayout>
      <div className={classes.root}>
        <Button variant='outlined' color='primary' onClick={prevPage}>
          {anterior}
        </Button>
        <InputSearch type='text' readOnly value={pageNumber} max={maximo} />
        <Button variant='outlined' color='primary' onClick={nextPage}>
          {siguiente}
        </Button>
      </div>
    </NavigatorLayout>
  );
}

export default Navigator;
