import React from 'react'
import {AppBar, Toolbar, IconButton, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './Style'
const NavBar =() =>{
  const classes = useStyles()
  return(
    <>
      <AppBar position='fixed'  color='inherit'>
        <Toolbar >
          <Typography variant='h6'>
            +Zeus
          </Typography>
          
            <div className={classes.menu} >
            <IconButton >
              <MenuIcon />
            </IconButton>
            </div>
          
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar