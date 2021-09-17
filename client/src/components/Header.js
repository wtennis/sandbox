import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  }
}));

function Header({user, setUser, toggleWidgetDrawer }){
    const classes = useStyles();
    const history = useHistory();

    function handleSignout(){
        fetch('/signout', {method: "DELETE"})
        .then(() =>{
            setUser(false)
            history.push("/signin")
        })
    }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={ toggleWidgetDrawer } edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <h2 className="gluten">Sandbox</h2>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <Button color="inherit" onClick={handleSignout}>Sign out</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header