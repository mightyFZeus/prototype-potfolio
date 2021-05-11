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

  const lists = ["Home", "Projects", "Resume", "Contact Me"];
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
              {lists.map((list) => (
                <List>
                  <ListItem>
                    <ListItemText>{list}</ListItemText>
                  </ListItem>
                </List>
              ))}
            </Drawer>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
