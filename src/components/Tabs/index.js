import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles,IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TuneIcon from '@material-ui/icons/Tune';
import Box from '@material-ui/core/Box';
import NextToJump from './NextToJump';

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
        <Box p={3}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
       '& .MuiTabs-scroller': {
            backgroundColor: 'transparent',
            '& .MuiTabs-flexContainer': {
                '& .Mui-selected': {
                    borderBottom:'3px solid #7862fe'
                },
                '& .MuiButtonBase-root': {
                    '& .MuiTab-wrapper': {
                        textTransform: 'none',
                        fontSize: 13,
                        fontWeight:500
                    }
                },
                '& .MuiTab-root': {
                    minWidth:'fit-content'
                }
            }
    }
  },
}));

export default function IndexTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const tabHeader =["Next to Jump", "Latest Results"]
  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0} >
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                  {tabHeader.map((e, i) => <Tab key={i} label={e} />)}
                  <IconButton  size="small" style={{margin:'auto 0'}}>
                  <TuneIcon color="primary"/>
                  </IconButton>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
            <NextToJump />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
     
    </div>
  );
}
