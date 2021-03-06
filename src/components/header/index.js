import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    //   flexGrow: 1,
    //   width:'7%'
    },
    navTitle: {
        display: 'flex',
        flexDirection: 'row',
        width: '200px',
        justifyContent:'space-between'
    },
    toolBar: {
        display: 'flex',
        justifyContent:'space-between'
    },
    profile: {
        color: 'blue',
        backgroundColor: 'white',
        fontSize: 15,
        height: 35,
        width:35
    },
    avatarDiv: {
        display: 'flex',
        flexDirection: 'row',
    },
    userName: {
        margin:'auto'
    }
}));

export default function MenuAppBar(props) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
const navTitle=["Home","Help","Search"]
    
  return (
   <AppBar position="static">
        <Toolbar className={classes.toolBar}>
        <Typography variant="h5" className={classes.title}>
                  pex
        </Typography>
        <div className={classes.navTitle}>
          {navTitle.map(e => <Typography key={e} variant="subtitle2" display="block" >{e}</Typography>)}
        </div>
          {auth && (
            <div className={classes.avatarDiv}>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                      >
                 <Avatar className={classes.profile}>BP</Avatar>
      
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                      </Menu>
                      <Typography variant="body2" className={classes.userName}>John xxx</Typography>
            </div>
              )}
          </Toolbar>
      </AppBar>
  );
}
