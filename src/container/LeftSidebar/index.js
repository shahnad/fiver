import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import BrightnessAutoIcon from '@material-ui/icons/BrightnessAuto';
import PinDropIcon from '@material-ui/icons/PinDrop';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import EqualizerIcon from '@material-ui/icons/Equalizer';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginLeft:theme.spacing(2.2),
    '& .MuiList-root': {
      '& .MuiListItem-root': {
        textAlign: 'right',
        '& .MuiListItemIcon-root': {
          justifyContent: 'flex-end',
          '& .MuiSvgIcon-root': {
            fontSize: 20
          }
        },
        '& .MuiListItemText-root': {
          '& .MuiTypography-root': {
            fontSize: 14,
            width: 'fit-content',
            marginLeft: 15
          }
        }
      }
    }
  },
}));

const LeftSidebarItems = [
  { title: "All Tips",icon:BrightnessAutoIcon },
  { title: "News",icon: VolumeDownIcon},
  { title: "Competetion",icon:PinDropIcon },
  { title: "Tipster",icon:SupervisorAccountIcon },
  { title: "Stats",icon:EqualizerIcon }
]
export default function LeftSidebar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {LeftSidebarItems.map((e,i) => <ListItem button key={i}>
          <ListItemIcon>
            <e.icon />
          </ListItemIcon>
          <ListItemText primary={e.title} />
        </ListItem>)}

      </List>


    </div>
  );
}
