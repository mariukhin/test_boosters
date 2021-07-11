import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { routePaths } from 'Routes';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

import React from 'react';

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
        <Box p={3} style={{ width: '100%' }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100vh',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    paddingTop: '20px',
  },
}));

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const PageWithTabs = ({ pageKey, children }) => {
  const history = useHistory();
  const classes = useStyles();
  const currentTabRoute = activeKey => {
    switch (activeKey) {
      case 0:
        return routePaths.globalStatistics;
      case 1:
        return routePaths.countryStatistics;
      case 2:
        return routePaths.about;
      default:
        break;
    }
  };

  const handleChange = (event, newValue) =>
    history.replace(currentTabRoute(newValue));

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={pageKey}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <LinkTab
          label="Global statistics"
          href={routePaths.globalStatistics}
          style={{ textTransform: 'none ' }}
          {...a11yProps(0)}
        />
        <LinkTab
          label="Country statistics"
          href={routePaths.countryStatistics}
          style={{ textTransform: 'none ' }}
          {...a11yProps(1)}
        />
        <LinkTab
          label="About"
          href={routePaths.about}
          style={{ textTransform: 'none ' }}
          {...a11yProps(2)}
        />
      </Tabs>
      <TabPanel value={pageKey} index={0}>
        {children}
      </TabPanel>
      <TabPanel value={pageKey} index={1}>
        {children}
      </TabPanel>
      <TabPanel value={pageKey} index={2}>
        {children}
      </TabPanel>
    </div>
  );
};

export default PageWithTabs;
