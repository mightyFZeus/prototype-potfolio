import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  name: {
    marginBottom: "1.5rem",
    fontWeight: 700,
    fontSize: "4rem",
    marginTop: "7rem",
    color: "white"
    // marginLeft: '3rem'
  },

  role: {
    marginBottom: "1.5rem",
    fontSize: "2rem",
    color: "white"
    // marginLeft: '3rem'
  },
  description: {
    marginBottom: "1.5rem",
    color: "white"
    // marginLeft: '3rem'
  },
  seemoreBtn: {
    marginLeft: "30rem",
    textTransform: "none",
    color: "white",
    backgroundColor: "#16161A",
    color:'white',
    borderColor:'white'
  },

  divWidth: {
    width: "600px"
  }
}));
