import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme();

theme.typography.h2 = {
  // fontSize:'2rem',
  "@media(max-width:600px)": {
    fontSize: "2rem"
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "8rem"
  },
  fontFamily: ["Raleway", "sans-serif"].join(",")
};
