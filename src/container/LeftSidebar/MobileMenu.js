import React from 'react';
import { withStyles,makeStyles,Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import BrightnessAutoIcon from '@material-ui/icons/BrightnessAuto';
import PinDropIcon from '@material-ui/icons/PinDrop';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const useStyles = makeStyles((theme)=>({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus(props) {
  const classes = useStyles(props);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

const LeftSidebarItems = [
  { title: "All Tips",icon:BrightnessAutoIcon },
  { title: "News",icon: VolumeDownIcon},
  { title: "Competetion",icon:PinDropIcon },
  { title: "Tipster",icon:SupervisorAccountIcon },
  { title: "Stats",icon:EqualizerIcon }
]
    
  return (
      <div>
          <Avatar variant="circular" alt="Remy Sharp" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWyvbWLwIBSAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="  aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick} className={classes.small}>
          
          </Avatar>
    
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      {LeftSidebarItems.map(option=>  <StyledMenuItem>
          <ListItemIcon>
            <option.icon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary={option.title}/>
        </StyledMenuItem>)}
     
      
      </StyledMenu>
    </div>
  );
}
