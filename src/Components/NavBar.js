import * as React from 'react';
import { IconButton, Button, Typography, Toolbar, Box, AppBar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom'





export default function ButtonAppBar(props) {

    return (
        
      <Box>
        <AppBar position="static" style={{background:'rgb(60,179,113)'}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              >
             <MenuIcon/>
            </IconButton>
            <Typography variant="h6" component="div">
              Temple Small Business
            </Typography>
            <Link style={{textDecoration:'none'}} to="/Listings"> 
                <Button color="inherit">Listings</Button>
            </Link>
            <Link style={{textDecoration:'none'}} to="/Listings">
                <Button color="inherit">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
        {props.loggedIn && <div style={{backgroundColor:"blue"}}>
            You are currently Logged In
            </div>}
      </Box>
      
      );
    }