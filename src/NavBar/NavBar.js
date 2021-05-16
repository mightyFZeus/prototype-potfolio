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
      listText: "HOME",
      listPath: "/"
    },
    {
      listText: "PROJECTS",
      listPath: "/Projects"
    },
    {
      listText: "RESUME",
      listPath: "/Resume"
    },
    {
      listText: "CONTACTS",
      listPath: "/Contacts"
    }
  ];
  return (
    <>
      <AppBar
        style={{ backgroundColor: "#101016" }}
        position="fixed"
        color="inherit"
      >
        <Toolbar>
          <Typography className={classes.logo} variant="h4">
            +Zeus
          </Typography>

          <div className={classes.menu}>
            <IconButton className={classes.logo} onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor={"right"}
              open={drawer}
              onClose={toggleDrawer(false)}
            >
              <List style={{ backgroundColor: "#101016", height: "100%" }}>
                {lists.map((list, key) => (
                  <ListItem key={key} component={Link} to={list.listPath}>
                    <ListItemText style={{ color: "#ffffff" }}>
                      {list.listText}
                    </ListItemText>
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
