import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  name: {
    marginBottom: "1.5rem",
    fontWeight: 700,
    fontSize: "5rem"
  },

  role: {
    marginBottom: "1.5rem",
    fontSize: "5rem"
  },
  description: {
    marginBottom: "1.5rem"
  },
  seemoreBtn: {
    marginLeft: "0rem",
    textTransform: "none"
  },

  divWidth: {
    width: "600px"
  }
}));
