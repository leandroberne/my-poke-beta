import React from 'react';
import { SearchLayout } from './style';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 600,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function Search() {
  const classes = useStyles();
  return (
    <SearchLayout>
      <Paper component='form' className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder='Buscar Pokemones'
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton
          type='submit'
          className={classes.iconButton}
          aria-label='search'
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </SearchLayout>
  );
}

export default Search;
