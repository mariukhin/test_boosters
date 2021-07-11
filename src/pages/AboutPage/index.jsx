import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PageWithTabs from 'Components/PageWithTabs';

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: '20px',
    fontWeight: '700',
    width: '100%',
    marginBottom: '20px',
  },
}));

const AboutPage = () => {
  const classes = useStyles();

  return (
    <PageWithTabs pageKey={2}>
      <Typography className={classes.heading}>About</Typography>
      <Typography>Project created by Maksym Mariukhin for Boosters</Typography>
    </PageWithTabs>
  );
};

export default AboutPage;
