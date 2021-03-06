import React from "react";
import {
  Card,
  Grid,
  CardContent,
  CssBaseline,
  Typography,
  Button,
  Box
} from "@material-ui/core";

import "./Styles.css";
import useStyles from "./Style";

const Projects = ({ resume }) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <Box  m={1} p={2}>
        <Grid container justify="center" spacing={4}>
          {resume.map((resume) => (
            <Grid item key={resume.id} xs={12} sm={6} md={4} lg={6}>
              <Card style={{ backgroundColor: "#16161A" }}>
                <CardContent key={resume.id}>
                  <Typography
                    style={{ color: "white" }}
                    className={classes.title}
                    variant="h4"
                  >
                    {resume.title}
                  </Typography>
                  <Typography variant="h6" className={classes.stack}>
                    {resume.stack}
                  </Typography>
                  <Typography className={classes.description} variant="body2">
                    {resume.description}
                  </Typography>
                  <a href={resume.github}>
                  <Button variant="contained" className={classes.button}>
                github
              </Button>
                  </a>
                  <a href={resume.live}>
                  <Button variant="contained" className={classes.button}>
                live
              </Button>
                  </a>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
