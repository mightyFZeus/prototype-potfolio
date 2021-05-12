import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import theme from "./Styles";

import useStyles from "./Styles2";
import { ThemeProvider } from "@material-ui/core/styles";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box m={1} p={2}>
          <div className={classes.toolbar} />
          <Typography className={classes.name} variant="h2">
            Hi,I'm Bolarin Olabisi{" "}
          </Typography>
          <Typography className={classes.role} variant="h5">
            I provide solutions through Codes{" "}
          </Typography>
          <Typography className={classes.description} variant="subtitle1">
            I'm a frontend developer. I create interactive and user friendly
            experiences for amazing people using technology. I enjoy modern
            technology and crafting layouts to achieve desired design and look.
          </Typography>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Home;
