import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@material-ui/core';

function Navigation() {
  const history = useHistory();

  const goTo = useCallback(route => () => history.push(route), [history]);

  return (
    <AppBar position="static">
      <Toolbar>
        <Button onClick={goTo('/')} color="inherit">Home</Button>
        <Button onClick={goTo('/favorites')} color="inherit">Favorites</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
