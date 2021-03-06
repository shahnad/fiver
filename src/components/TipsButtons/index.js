import React from 'react';
import { makeStyles, Button } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        fontSize: theme.spacing(1.4),
        borderRadius: 16,
        padding:'7px 13px'
    },
     button2: {
        margin: theme.spacing(1),
        fontSize: theme.spacing(1.4),
        borderRadius: 16,
        padding: '7px 13px',
        // border:0
    },
}));

export default function TipsButtons(props) {
    const classes = useStyles();
   return (
        <div>
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                endIcon={<ArrowForwardIcon />}
            >
                I Want to Tip
              </Button>
             
            <Button
                variant="text"
                color="primary"
                size="small"
                className={classes.button2}
                endIcon={<ArrowForwardIcon />}
            >
                I Want Tips
              </Button>

        </div>
    );
}
