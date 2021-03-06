import React from "react";
import emailjs from "emailjs-com";
import { Box, TextField, Button } from "@material-ui/core";
import useStyles from "./Styles";
const Contact = () => {
  const classes = useStyles();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i2z4avg",
        "template_4w3e5at",
        e.target,

        "user_nhjK17UH5oB3QFMRU2saR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <Box className={classes.box}>
        <div className={classes.toolbar} />

        <div className={classes.formDiv}>
          <form className="contact-form" onSubmit={sendEmail}>
            <TextField
              className={classes.fieldText}
              label="Your Name"
              variant="outlined"
              name="name"
            />
            <br />
            <TextField
              className={classes.fieldText}
              label="Your Email"
              type="email"
              variant="outlined"
              name="email"
            />
            <br />
            <TextField
              className={classes.fieldText}
              label="Your Message"
              variant="outlined"
              multiline
              rowsMax={4}
              name="message"
            />
            <Button type="submit" className={classes.button}>
              Send
            </Button>
          </form>
        </div>
      </Box>
    </>
  );
};

export default Contact;
