import React, { useEffect } from 'react';
import { formatISO } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import { useDispatch, useSelector } from 'react-redux';

import * as globalApiActions from 'Api/global';
import * as globalActions from 'Actions/global';
import { getFilters, getGlobalStatistics } from 'Selectors/global';
import PageWithTabs from 'Components/PageWithTabs';
import { FETCHING_STATE } from 'Utils/';

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: '20px',
    fontWeight: '700',
  },
  container: {
    marginTop: '30px',
    marginBottom: '30px',
    width: '50%',
  },
  clearButton: {
    height: '40px',
    marginLeft: '20px',
  },
}));

const GlobalStatisticsPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const globalStatistics = useSelector(getGlobalStatistics);
  const filters = useSelector(getFilters);

  useEffect(() => {
    dispatch(
      globalApiActions.getGlobalStatistics(filters.dateFrom, filters.dateTo),
    );
  }, [filters]);

  const handleChangeDate = (date, isFrom) =>
    dispatch(
      globalActions.setFilters({
        ...(isFrom
          ? { dateFrom: formatISO(date) }
          : { dateTo: formatISO(date) }),
      }),
    );

  const clearDates = e =>
    dispatch(globalActions.setFilters({ dateFrom: 'clear', dateTo: 'clear' }));

  return (
    <PageWithTabs pageKey={0}>
      <Typography className={classes.heading}>Global statistics</Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid
          className={classes.container}
          container
          justifyContent="space-between"
          alignItems="center"
          wrap="nowrap"
        >
          <Grid container wrap="nowrap" justifyContent="space-between">
            <KeyboardDatePicker
              id="dateFrom"
              label="Date from"
              format="MM/dd/yyyy"
              value={filters.dateFrom}
              onChange={date => handleChangeDate(date, true)}
              variant="inline"
              KeyboardButtonProps={{
                'aria-label': 'change date from',
              }}
            />
            <KeyboardDatePicker
              id="dateTo"
              label="Date to"
              format="MM/dd/yyyy"
              value={filters.dateTo}
              onChange={date => handleChangeDate(date, false)}
              variant="inline"
              KeyboardButtonProps={{
                'aria-label': 'change date to',
              }}
            />
          </Grid>
          <Button
            className={classes.clearButton}
            variant="outlined"
            onClick={clearDates}
          >
            Clear
          </Button>
        </Grid>
      </MuiPickersUtilsProvider>
      {globalStatistics.state === FETCHING_STATE.LOADED && (
        <LineChart
          width={1200}
          height={550}
          data={globalStatistics.data}
          margin={{ top: 5, right: 10, left: 30, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" padding={{ right: 20 }} tick={false} />
          <YAxis type="number" domain={['dataMin', 'dataMax']} scale="log" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="NewConfirmed"
            stroke="#260E25"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="NewDeaths"
            stroke="#82ca9d"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="NewRecovered"
            stroke="#FF5733"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="TotalConfirmed"
            stroke="#38FC0B"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="TotalDeaths"
            stroke="#0B77FC"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="TotalRecovered"
            stroke="#FC0BF4"
            strokeWidth={2}
          />
        </LineChart>
      )}
    </PageWithTabs>
  );
};

export default GlobalStatisticsPage;
