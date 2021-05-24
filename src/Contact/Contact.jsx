import React from "react";
import emailjs from "emailjs-com";
import {Box} from '@material-ui/core'
import useStyles from "./Styles";
const Contact = () => {
  const classes = useStyles();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_i2z4avg", "template_4w3e5at", e.target, 
      
      "user_nhjK17UH5oB3QFMRU2saR")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  }

  return (
    <>

     <Box className={classes.box}>
      <div className={classes.toolbar} />
      <div className={classes.formDiv}>
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      </div>
      
      </Box>
    </>
  );
};

export default Contact;
