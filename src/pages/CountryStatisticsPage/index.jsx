import React, { useEffect, useMemo } from 'react';
import { formatISO } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import { useDispatch, useSelector } from 'react-redux';

import * as countryApiActions from 'Api/country';
import * as countryActions from 'Actions/country';
import {
  getFilters,
  getCountryStatistics,
  getCountries,
} from 'Selectors/country';
import PageWithTabs from 'Components/PageWithTabs';
import { FETCHING_STATE } from 'Utils/';

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: '20px',
    fontWeight: '700',
    width: '100%',
  },
  container: {
    marginTop: '30px',
    marginBottom: '30px',
    width: '100%',
  },
  clearButton: {
    height: '40px',
    marginLeft: '20px',
  },
  select: {
    width: '200px',
    padding: '8px',
  },
}));

const cases = [
  { name: 'confirmed', title: 'Confirmed' },
  { name: 'recovered', title: 'Recovered' },
  { name: 'deaths', title: 'Deaths' },
];

const CountryStatisticsPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const countryStatistics = useSelector(getCountryStatistics);
  const countries = useSelector(getCountries);
  const filters = useSelector(getFilters);
  const countriesData = useMemo(
    () => countries.state === FETCHING_STATE.LOADED && countries.data,
  );

  useEffect(() => {
    dispatch(
      countryApiActions.getCountryStatistics(
        filters.country?.Slug,
        filters.dateFrom,
        filters.case?.name,
      ),
    );
    if (countries.state !== FETCHING_STATE.LOADED) {
      dispatch(countryApiActions.getCountries());
    }
  }, [filters]);

  const handleChangeDate = date =>
    dispatch(
      countryActions.setFilters({
        dateFrom: formatISO(date),
      }),
    );

  const handleChangeCountry = event => {
    const findItem = countries.data.find(
      item => item.Slug === event.target.value,
    );
    dispatch(
      countryActions.setFilters({
        country: findItem,
      }),
    );
  };

  const handleChangeCase = event => {
    const findItem = cases.find(item => item.name === event.target.value);
    dispatch(
      countryActions.setFilters({
        case: findItem,
      }),
    );
  };

  const clear = e =>
    dispatch(
      countryActions.setFilters({
        dateFrom: 'clear',
        country: countries.data.find(item => item.Slug === 'ukraine'),
        case: { name: 'confirmed', title: 'Confirmed' },
      }),
    );

  return (
    <PageWithTabs pageKey={1}>
      <Typography className={classes.heading}>Country statistics</Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid
          className={classes.container}
          container
          justifyContent="space-between"
          alignItems="center"
          wrap="nowrap"
        >
          <KeyboardDatePicker
            id="dateFrom"
            label="Date from"
            format="MM/dd/yyyy"
            value={filters.dateFrom}
            onChange={date => handleChangeDate(date)}
            variant="inline"
            KeyboardButtonProps={{
              'aria-label': 'change date from',
            }}
          />
          {countriesData && (
            <Select
              className={classes.select}
              value={filters.country?.Slug}
              onChange={handleChangeCountry}
            >
              {countriesData.map(item => (
                <MenuItem key={item.Slug} value={item.Slug}>
                  {item.Country}
                </MenuItem>
              ))}
            </Select>
          )}
          <Select
            className={classes.select}
            value={filters.case?.name}
            onChange={handleChangeCase}
          >
            {cases.map(item => (
              <MenuItem key={item.name} value={item.name}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
          <Button
            className={classes.clearButton}
            variant="outlined"
            onClick={clear}
          >
            Clear
          </Button>
        </Grid>
      </MuiPickersUtilsProvider>
      {countryStatistics.state === FETCHING_STATE.LOADED && (
        <BarChart
          width={1200}
          height={550}
          data={countryStatistics.data}
          margin={{ top: 5, right: 10, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" padding={{ right: 20 }} tick={false} />
          <YAxis type="number" domain={['dataMin', 'dataMax']} scale="log" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Active" fill="#0B77FC" />
          <Bar dataKey="Confirmed" fill="#260E25" />
          <Bar dataKey="Deaths" fill="#82ca9d" />
          <Bar dataKey="Recovered" fill="#FF5733" />
        </BarChart>
      )}
    </PageWithTabs>
  );
};

export default CountryStatisticsPage;
