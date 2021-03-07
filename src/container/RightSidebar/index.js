import React from 'react';
import { makeStyles, Paper, Typography,Avatar,IconButton } from '@material-ui/core';
import NoteIcon from '@material-ui/icons/Note';
import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles((theme) =>({
    root: {
          width:'98%',
        display: 'flex',
          flexDirection:'column'
    },

    title: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        padding: theme.spacing(1),
        display: 'flex',
        justifyContent:'space-evenly',
        '& .MuiTypography-root': {
            margin:'auto 5px'
        }
    },
    pos: {
        marginBottom: 12,
    },
     item: {
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing(2),
        //   justifyContent:'space-between'
    },
      small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
     
    },
    subtitle: {
          margin:'auto'
    },
    closeIcon: {
         width: theme.spacing(2.2),
        height: theme.spacing(2),
     
    }
})
);

export default function RightSidebar(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.root} elevation={0}>
            <div className={classes.title}>
                <NoteIcon color="inherit" style={{height:'auto'}} size="large"/>
                <Typography variant="h6" gutterBottom>
                    Tip Slip
                 </Typography>
            </div>
            <div className={classes.content}>
                <Paper elevation={0}
                    className={classes.item}>
                            <Avatar variant="circular" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAADNCAMAAAC8cX2UAAAAA1BMVEWDhYToKLM0AAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuA8XLAAFcyH30AAAAAElFTkSuQmCC" className={classes.small} />
                   
                         <Typography variant="subtitle2" className={classes.subtitle}>
                        R3 Townsville</Typography>
                    
                   
                    
                    <IconButton size="small">
                        <CloseIcon size="small" className={classes.closeIcon}/>
                    </IconButton>
                        </Paper>
            </div>
        </Paper>
    );
}
