import React from "react";
import { Card, Grid, CardContent, Typography, Button } from "@material-ui/core";
import "./Styles.css";
const Projects = ({ resume }) => {
  return (
    <>
      <Grid container justify="center" spacing={4}>
        {resume.map((resume) => (
          <Grid item key={resume.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardContent key={resume.id}>
                <Typography className="test">{resume.title}</Typography>
                <Typography>{resume.stack}</Typography>
                <Typography>{resume.description}</Typography>
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
