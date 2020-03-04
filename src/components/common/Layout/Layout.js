import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navigation from './Navigation';

const useStyles = makeStyles({
  container: {
    marginTop: 24
  }
});

function Layout(props) {
  const { children } = props;

  const classes = useStyles();

  return (
    <>
      <Navigation />
      <Container fixed className={classes.container}>
        {children}
      </Container>
    </>
  );
}

export default Layout;
