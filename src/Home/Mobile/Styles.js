import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  name: {
    marginBottom: "1.5rem",
    fontWeight: 700,
    fontSize: "2.5rem",
    marginTop: "2rem",
    color: "white"
    // marginLeft: '3rem'
  },

  role: {
    marginBottom: "1.5rem",
    fontSize: "1.5rem",
    color: "white"
    // marginLeft: '3rem'
  },
  description: {
    marginBottom: "1.5rem",
    color: "white"
    // marginLeft: '3rem'
  },
  seemoreBtn: {
    marginLeft: "10rem",
    textTransform: "none",
    color: "white",
    backgroundColor: "#C71061"
  }

  // divWidth: {
  //   width: "600px"
  // }
}));
