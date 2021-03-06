import React from 'react';
import { makeStyles, Avatar, Paper, Grid, Typography, Button } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    small: {
        width: theme.spacing(2),
        height: theme.spacing(2),
        fontSize: 12
    },
    item: {
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing(2),
          justifyContent:'space-between'
    },
    title: {
        margin: 'auto 5px',
        fontSize:'revert'
    },
    button: {
        backgroundColor: '#ff6666',
        color: 'white',
        width: theme.spacing(2),
        height: theme.spacing(2.3),
        fontSize:10
    }
}));

export default function NextToJump(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {[1, 2, 3, 4].map(e =>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <Paper elevation={0} className={classes.item}>
                            <Avatar alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAADNCAMAAAC8cX2UAAAAA1BMVEWDhYToKLM0AAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuA8XLAAFcyH30AAAAAElFTkSuQmCC" className={classes.small} />
                            <Typography variant="subtitle2" className={classes.title}>
                                R3 Townsville</Typography>
                            <Button size="small" variant="contained" className={classes.button}>
                                1hr 45s
        </Button>
                        </Paper>
                    </Grid>)}

            </Grid>
        </div>
    );
}
