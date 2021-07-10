import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDateTimePicker,
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useDispatch, useSelector } from 'react-redux';

import * as orderApiActions from 'Api/order';
import { getFilters } from 'Selectors/order';
import PageWithTabs from 'Components/PageWithTabs';

const GlobalStatisticsPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getFilters);
  const setFilters = dispatch(setFilters);

  const handleChangeDate = (date, isFrom) =>
    setFilters({
      ...filters,
      ...(isFrom ? { dateFrom: date } : { dateTo: date }),
    });

  const clearDates = e => setFilters({ dateFrom: 'clear', dateTo: 'clear' });

  return (
    <PageWithTabs pageKey={0}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid className="w-1/2" container justify="space-between" wrap="nowrap">
          <Grid className="w-full" container justify="flex-start">
            <KeyboardDateTimePicker
              className="w-5/12 mr-16"
              margin="small"
              id="date"
              label="Date/time from"
              format="MM/dd/yyyy dd:mm"
              value={filters.dateFrom}
              emptyLabel="Date/time from"
              onChange={date => handleChangeDate(date, true)}
              variant="inline"
              KeyboardButtonProps={{
                'aria-label': 'change date/time from',
              }}
            />
            <Typography className="text-18 mt-16">-</Typography>
            <KeyboardDateTimePicker
              className="w-5/12 ml-16"
              margin="small"
              id="date"
              label="Date/time to"
              format="MM/dd/yyyy dd:mm"
              value={filters.dateTo}
              emptyLabel="Date/time to"
              onChange={date => handleChangeDate(date, false)}
              variant="inline"
              KeyboardButtonProps={{
                'aria-label': 'change date/time to',
              }}
            />
          </Grid>
          <Button
            className="whitespace-no-wrap normal-case mt-12 mr-12 h-36"
            variant="outlined"
            onClick={clearDates}
          >
            Clear
          </Button>
        </Grid>
      </MuiPickersUtilsProvider>
    </PageWithTabs>
  );
};

export default GlobalStatisticsPage;
