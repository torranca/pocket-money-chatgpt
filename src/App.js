// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Typography, AppBar, Toolbar, Button, Avatar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ParentPay from './components/ParentPay';
import ChildAccount from './components/ChildAccount';
import Logo from './logo.png'; // Import your logo image
import './App.css';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar position="static" className="app-header">
          <Toolbar>
          <Avatar src={Logo} alt="App Logo" sx={{ width: 40, height: 40, marginRight: 10 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Pocket Money App
            </Typography>
            <Button component={Link} to="/parent-pay" color="inherit">
              Parent Pay
            </Button>
            <Button component={Link} to="/child-account" color="inherit">
              Child Account
            </Button>
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm" sx={{ mt: 4 }}>
          <Routes>
            <Route path="/parent-pay" element={<ParentPay />} />
            <Route path="/child-account" element={<ChildAccount />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;
