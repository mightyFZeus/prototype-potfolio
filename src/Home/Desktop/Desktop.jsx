import React from "react";

import { Typography, Grid, Button, Box } from "@material-ui/core";
import Projects from "../../Projects/Projects";

import useStyles from "./Styles";
const Desktop = ({ resume }) => {
  const classes = useStyles();
  return (
    <>
      <Box m={3} p={3}>
        <Grid container spacing={1}>
          <Grid lg={6}>
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
          </Grid>
          <Grid lg={6}>
            <Projects resume={resume} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Desktop;
