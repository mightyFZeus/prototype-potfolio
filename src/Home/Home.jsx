import React from "react";
import { Typography } from "@material-ui/core";
import theme from "./Styles";
import "./Styles.css";
import { ThemeProvider } from "@material-ui/core/styles";

const Home = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography variant="h2">this is just a test </Typography>
      </ThemeProvider>
    </>
  );
};

export default Home;
