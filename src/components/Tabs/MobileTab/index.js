import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '100%',
        maxHeight:'100vh',
    '& .MuiTabs-root': {
        //  height:65
     }
    },
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3} style={{height:'70vh'}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


export default function MobileTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper square className={classes.root}>
            <div>
                <TabPanel value={value} index={0}>
                    Item One</TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two</TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three</TabPanel>
            </div>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                aria-label="icon tabs example"
            >


                <Tab icon={<PhoneIcon />} aria-label="phone" label="RECENTS"/>
                <Tab icon={<FavoriteIcon />} aria-label="favorite" label="FAVORITES" />
                <Tab icon={<PersonPinIcon />} aria-label="person" label="TIP SLIP" />
            </Tabs>

        </Paper>
    );
}
