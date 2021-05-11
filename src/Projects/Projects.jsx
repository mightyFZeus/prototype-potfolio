import React from "react";
import {
  Card,
  Grid,
  CardContent,
  CssBaseline,
  Typography,
  Button
} from "@material-ui/core";

import "./Styles.css";
import useStyles from "./Style";

const Projects = ({ resume }) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {resume.map((resume) => (
          <Grid item key={resume.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardContent key={resume.id}>
                <Typography className={classes.title} variant="h4">
                  {resume.title}
                </Typography>
                <Typography variant="h6" className={classes.stack}>
                  {resume.stack}
                </Typography>
                <Typography variant="body2">{resume.description}</Typography>
                <a href={resume.github}>
                  <Button
                    style={{ textTransform: "none" }}
                    variant="contained"
                    color="primary"
                  >
                    github
                  </Button>
                </a>
                <a href={resume.live}>
                  <Button
                    style={{ textTransform: "none" }}
                    variant="contained"
                    color="secondary"
                  >
                    live
                  </Button>
                </a>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Projects;
