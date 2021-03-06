import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  box: {
    backgroundColor: "##101016",
    height: "100vh"
  },
  formDiv: {
    position: "relative",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",

    padding: "10px",
    width: "50%",
    height: "50%"
  },
  fieldText: {
    width: "100%",
    marginBottom: "2rem",
    backgroundColor: "#16161A",
    "& label.Mui-focused": {
      color: "white"
    },
    "& label": {
      color: "white"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white"
      },
      "&:hover fieldset": {
        borderColor: "white"
      },
      "&.Mui-focused fieldset": {
        borderColor: "white"
      }
    }
  },

  button: {
    backgroundColor: "#16161A",
    textTransform: "none",
    color: "white",
    width: "100%"
  }
}));
