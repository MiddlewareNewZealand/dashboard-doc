---
id: utilisation-table
title: Forecasting Table
sidebar_label: Forecasting Table
sidebar_position: 3
last_update:
  date: 2026/03/25
  author: Ijaan Yudana
---


Both `utilisation forecasting` and `job manager forecasting` pages use the same table. The only difference is that `utilisation forecasting` has `by profile`, `by job`, `override`, and `by practice` buttons while `job manager forecasting` only has the default `by job` view (no button).

As such `utilisation forecasting` doesn't allow entry of forecasting data without explicitly enabling it, while in `job manager forecasting` it is enabled by default and cannot be turned off.

The following is an explanation of the components of the table.

## Main (forecastingTable)

Parameters:

- `data` Processed forecasting and utilisation data to be displayed.
- `startDate` YYYY-MM-DD
- `endDate` YYYY-MM-DD
- `writeForecasts` Function to provide a set of forecast data for writing to the forecasts collection.
- `setViewMode` Function to change view mode.
- `viewMode` Current view mode.
- `actionConfig` What interactable buttons to show.
- `rowConfig` What fields to show in the rows.

Notes:

- This is where the data is sorted in alphabetical order
- This is where UI side-effects of actions (i.e writing forecasts) is handled
- This is where the table state is handled (excepting view mode)

Return: `JSX obj` based on the given `view mode`

## ActionsSection

This component handles the interactive buttons (And their side-effects):

- Change the `view mode`
- Save forecasting changes
- Expand/collapse all rows.
- Override cell editability

## TableHeader

This component is a `table header` that transforms based on `view mode`. 

:::warning
When adding/subtracting columns, remember to adjust the span compensations to prevent any whitespace from appearing
:::

## Parent Rows

These are the top layer rows that can be expanded to their `child rows`. They show summaries of their objects i.e a job shows a summary of all its assigned profiles. As such, they do not have editable forecast cells, because at this level there are no singular `jobId`-`profileId` pairs.

:::info 
`profile row` is the only exception, as it is a `parent row` that can also be a `child row` to the `practice row`.
:::

:::info
The following section should be kept in sync with the `README` in '@/Components/Graphs/Forecasting'
:::

### ParentJobRow

- actions: billable
- forecast: forecast / working hours
- complete %: all time billable / estimated hours for job (in wfm)
- assignable: estimated hours for job - all time billable - forecast hours for time range 

:::warning
Assignable could be flawed as it uses forecast hours for range. When it is upgraded to use an improved query system, using total forecasts
for job would be better.
:::

### ParentProfileRow

- actuals: billable / working hours
- forecast: forecast / working hours
- total: billable + forecast (all for time period)
- util avg: (billable + forecast) / working hours (all for time period)

### ParentPracticeRow

Just an aggregation of profiles with the appropriate practice.

## Child Rows

### ChildJobRow

- actuals: billable 
- forecast: forecast

### ChildProfileRow

- actuals: billable
- forecast: forecast

