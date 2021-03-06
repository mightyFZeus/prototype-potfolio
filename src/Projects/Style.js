import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    marginBottom: "0.5em",
    fontWeight: "600",
    "@media(max-width:600px)": {
      fontSize: "2rem"
    }
  },
  stack: {
    marginBottom: "0.3em",
    color: "white"
  },
   
  toolbar: theme.mixins.toolbar,
  button: {
    marginRight: "2em",
    backgroundColor: "#16161A",
    color:'white',
    borderColor:'white',
    textTransform:'none',
   
  },
  description: {
    marginBottom: "1.5em",
    color: "white"
  }
}));
