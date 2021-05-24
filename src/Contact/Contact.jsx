import React from "react";
import emailjs from "emailjs-com";
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
      <div className={classes.toolbar} />
      <form className="contact-form" onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default Contact;
