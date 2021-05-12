import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  name: {
    marginBottom: "1.5rem",
    fontWeight: 700,
    fontSize: "3.5rem",
    "@media only screen and (min-width: 992px)": {
      fontSize: "5rem"
    }
  },

  role: {
    marginBottom: "1.5rem",
    "@media only screen and (min-width: 600px)": {
      fontSize: "3rem"
    },
    "@media only screen and (min-width: 992px)": {
      fontSize: "5rem"
    }
  },
  description: {
    marginBottom: "1.5rem",
    "@media only screen and (min-width: 600px)": {
      fontSize: "1.5rem"
    }
  },
  seemoreBtn:{
    "@media only screen and (min-width: 992px)": {
      marginLeft:'0rem'
    },
      marginLeft:'8rem',
    textTransform:'none',
    
  },

  divWidth:{
    "@media only screen and (min-width: 992px)": {
      width:'600px',
     
    },
  }
}));
