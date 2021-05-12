import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListSubheader
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./Style";
const NavBar = () => {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = (open) => (event) => setDrawer(open);

  const lists = [
    {
      listText: "Home",
      listPath: "/"
    },
    {
      listText: "Projects",
      listPath: "/Projects"
    },
    {
      listText: "Resume",
      listPath: "/Resume"
    },
    {
      listText: "Contacts",
      listPath: "/Contacts"
    }
  ];
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
              <List>
                {lists.map((list, key) => (
                  <ListItem key={key} component={Link} to={list.listPath}>
                    <ListItemText>{list.listText}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
