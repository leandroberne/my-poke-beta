import React from 'react';
import { NavigatorLayout } from './style';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function Navigator() {
  const classes = useStyles();
  return (
    <NavigatorLayout>
      <div className={classes.root}>
        <Pagination count={10} color='primary' />
      </div>
    </NavigatorLayout>
  );
}

export default Navigator;
