import React from 'react';
import PropTypes from 'prop-types';
import DraftFile from '../DraftFile/DraftFile';

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Calculator from '../Calculator/Calculator';
import Notes from '../Notes/Notes';
import ParamsCard from '../ParamsCard/ParamsCard';
import Images from '../Images/Images';
import PhotosTab from '../PhotosTab/PhotosTab';
import '../Images/Images.css';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 40,
        paddingTop: 30,
        paddingBottom: 50,
        paddingLeft: 150,
        paddingRight: 5,
        border: 5,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function VerticalTabs() {
    const classes = useStyles();
    //this sets which tab automatically loads
    const [value, setValue] = React.useState(4);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                // variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Calculator" {...a11yProps(0)} />
                <Tab label="Draft" {...a11yProps(1)} />
                {/* <Tab label="Materials" {...a11yProps(2)} /> */}
                <Tab label="Notes" {...a11yProps(2)} />
                <Tab label="Photos" {...a11yProps(3)} />
                <Tab label="All" {...a11yProps(4)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Calculator />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <DraftFile />
            </TabPanel>
            {/* <TabPanel value={value} index={2}>
                    <MaterialsTable />
            </TabPanel> */}
            <TabPanel value={value} index={2}>
                <Notes />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <PhotosTab/>
                {/* <Images /> */}
            </TabPanel>
            <TabPanel value={value} index={4}>
                <div>
                    <Images />
                    {/* <MaterialsTable /> */}
                    <ParamsCard />
                    <Notes />
                </div>
      </TabPanel>
        </div>
    );
}