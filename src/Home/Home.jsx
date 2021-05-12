import React from "react";
import { Typography } from "@material-ui/core";
import theme from "./Styles";
import "./Styles.css";
import useStyles from "./Styles2";
import { ThemeProvider } from "@material-ui/core/styles";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.toolbar} />
        <Typography variant="h2">this is just a test </Typography>
      </ThemeProvider>
    </>
  );
};

export default Home;
