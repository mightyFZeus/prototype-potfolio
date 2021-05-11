import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./Style";
const NavBar = () => {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = (open) => (event) => setDrawer(open);

  const test = () => (
    <List>
      <ListItem>
        <ListItemText>Home</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Projects</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Resume</ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>Contact</ListItemText>
      </ListItem>
    </List>
  );
  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Typography variant="h6">+Zeus</Typography>

          <div className={classes.menu}>
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor={"right"}
              open={drawer}
              onClose={toggleDrawer(false)}
            >
              {test()}
            </Drawer>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
