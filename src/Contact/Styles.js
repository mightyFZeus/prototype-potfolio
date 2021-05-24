import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  box:{
    backgroundColor:'#16161A',
    height:'100vh'
  },
  formDiv:{
position: 'absolute',
left: '50%',
top: '50%',
transform: 'translate(-50%, -50%)',
border: '1px solid #ffffff',
padding: '10px'
  }
}));
