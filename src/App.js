import React from 'react';
import { AppBar, Box, Typography, Button } from '@material-ui/core';
import './App.css';

const customTheme = createMuiTheme({
  palette: {
    secondary: {
      main: "#F5BD1F",
      contrastText: "#6a0dad "
    }
  }
});

function App() {
  return (
<ThemeProvider theme={customTheme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Austin Small Business
          </Typography>
          <Button color="inherit">Login</Button>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}

export default App;
