// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const Navbar = () => {
  return (
    <nav>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/parent-pay">
            <ListItemText primary="Parent Pay" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/child-account">
            <ListItemText primary="Child Account" />
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
  );
};

export default Navbar;
