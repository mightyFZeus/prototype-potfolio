import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  name: {
    marginBottom: "1.5rem",
    fontWeight: 700,
    fontSize: "6rem",
    "@media(max-width:600px)": {
      fontSize: "3rem"
    }
  },

  role: {
    marginBottom: "1.5rem",
    "@media(min-width:960px)": {
      fontSize: "4rem"
    }
  },
  description: {
    "@media(min-width:960px)": {
      fontSize: "2rem"
    }
  }
}));
