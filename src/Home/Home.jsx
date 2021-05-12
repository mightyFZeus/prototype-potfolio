import React from "react";
import { Typography, Button, Box } from "@material-ui/core";
import theme from "./Styles";

import useStyles from "./Styles2";
import { ThemeProvider } from "@material-ui/core/styles";

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box m={2} p={2}>
          <div className={classes.toolbar} />
          <Typography className={classes.name} variant="h2">
            Hi,I'm Bolarin Olabisi{" "}
          </Typography>
          <Typography className={classes.role} variant="body1">
            I provide solutions through Codes{" "}
          </Typography>
          <div className={classes.divWidth}>
            <Typography className={classes.description} variant="subtitle1">
              I'm a frontend developer. I create interactive and user friendly
              experiences for amazing people using technology. I enjoy modern
              technology and crafting layouts to achieve desired design and
              look.
            </Typography>
            <Button variant="outlined" className={classes.seemoreBtn}>
              See More
            </Button>
          </div>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Home;
