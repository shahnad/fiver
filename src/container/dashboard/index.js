import React from 'react'
import MenuAppBar from '../../components/header'
import TipsButtons from '../../components/TipsButtons'
import { makeStyles, IconButton, useTheme, withWidth } from '@material-ui/core'
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IndexTabs from '../../components/Tabs';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MobileTabs from '../../components/Tabs/MobileTab';
const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    container: {
        width: '100%',
        backgroundColor: '#f7f7fc',
        display: 'flex'
    },
    box1: {
        flex: 1
    },
    box2: {
        flex: 4
    },
    box3: {
        flex: 1
    },
    toggleLeft: {
        '& .MuiList-root': {
            '& .MuiListItem-root': {
                '& .MuiListItemText-root': {
                    display: 'none'
                }
            }
        }
    },
    toggleRight: {
        '& .MuiPaper-root': {

            display: 'none'
        }

    }

}));

function Dashboard(props) {
    const classes = useStyles();
    const { width } = props;
    const [isLeftSidebarOPen, setLeftSidebarOpen] = React.useState(true);
    const [isRightSidebarOPen, setRightSidebarOpen] = React.useState(true);

    const toggleLeftSidebar = () => {
        setLeftSidebarOpen((prev) => !prev);
    };
    const toggleRightSidebar = () => {
        setRightSidebarOpen((prev) => !prev);
    };

    return (
        <div>
            <MenuAppBar />
            <div style={{ overflow: 'auto' }}>
                <div className={classes.margin}>
                    <TipsButtons />
                </div>
            {width !== 'xs' && width !== 'sm' &&<div className={classes.container}>
                  
                        <div className={isLeftSidebarOPen ? classes.box1 : classes.toggleLeft}>
                            <IconButton onClick={toggleLeftSidebar}>
                                <ArrowBackIcon />
                            </IconButton>
                            <LeftSidebar />
                        </div>
                    <div className={classes.box2}>
                        <IndexTabs />
                    </div>
                   <div className={isRightSidebarOPen ? classes.box3 : classes.toggleRight}>
                        <IconButton onClick={toggleRightSidebar}>
                            <ArrowForwardIcon />
                        </IconButton>
                        <RightSidebar />
                    </div>
                </div>
                }
                <div className={classes.margin}>
            
                {width == 'xs' && <MobileTabs />}
                {width == 'sm' && <MobileTabs />}
                </div>
            </div>
        </div>
    )
}
export default withWidth()(Dashboard);