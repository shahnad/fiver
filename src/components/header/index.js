import React, { useEffect } from 'react';
import { makeStyles, withWidth } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import CustomizedMenus from '../../container/LeftSidebar/MobileMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navTitle: {
    display: 'flex',
    flexDirection: 'row',
    width: '200px',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },

  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  profile: {
    color: theme.palette.primary.main,
    backgroundColor:  theme.palette.common.white,
    fontSize: 15,
    height: 35,
    width: 35,
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.primary.main,
      color:theme.palette.common.white,
    }
  },
  avatarDiv: {
    display: 'flex',
    flexDirection: 'row',
  },
  MobileAvatarDiv: {
    
  },
  userName: {
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  title: {
    color: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
    color: theme.palette.primary.main,
    }
  }
}));

function MenuAppBar(props) {
  const { width } = props;
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [screenWidth, setScreenWidth] = React.useState("")
  const open = Boolean(anchorEl);

  useEffect(() => {
    setScreenWidth(width)
  }, [width])


  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navTitle = ["Home", "Help", "Search"]

  return (
    <AppBar position="static" color={width == 'sm' ? "inherit" : width == 'xs' ? "inherit" : "primary"}>
      <Toolbar className={classes.toolBar}>
    {  width == 'sm' ? <CustomizedMenus />: width == 'xs' ?<CustomizedMenus />:''}
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
            ><Avatar variant="circular" className={classes.profile}>BP</Avatar>
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

              {width == 'sm' && navTitle.map(e => <MenuItem key={e} onClick={handleClose}>{e}</MenuItem>)}
              {width == 'xs' && navTitle.map(e => <MenuItem key={e} onClick={handleClose}>{e}</MenuItem>)}
              <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Menu>
            <Typography variant="body2" className={classes.userName}>John xxx</Typography>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default withWidth()(MenuAppBar);
