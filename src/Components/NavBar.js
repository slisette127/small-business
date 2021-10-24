import * as React from 'react';
import { IconButton, Button, Typography, Toolbar, Box, AppBar, ThemeProvider, makeStyles } from '@material-ui/core';

const customStyles = makeStyles((theme) =>({
    // palette: {
    //   secondary: {
    //     main: "#F5BD1F"
    //   },
      root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      }
    }
  ));


export default function ButtonAppBar() {
    const classes = customStyles();

    return (
        <ThemeProvider theme={customStyles}>
      <Box className={classes.root}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              className={classes.menuButton}
            >
             
            </IconButton>
            <Typography variant="h6" component="div" className={classes.title}>
              Temple Small Business
            </Typography>
            <Button color="inherit">Listings</Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
        </ThemeProvider>
    );
  }