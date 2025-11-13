---
id: utilisation_billable-overview
title: pages/reports/utilisation_billable
sidebar_label: Overview
sidebar_position: 1
last_update:
  date: 2025/11/13
  author: Ijaan Yudana
---

This page is where admins can build queries for the times database (that contains all tasks) and have it displayed in a table and line graph format.

## Data retrieval and redux

This is done by a one-time firestore request. This request uses debouncing and sleeping to ensure the whole browser doesn't freeze as each month has 2.5k or more tasks recorded.

Each month is reduced to the timesByMonthRange map in the redux cache

i.e

```js
{'YYYY-MM':{data}}
```

These can be retrieved if another query made in the same session overlaps with these dates. This can massive improve performance and reduces duplicate data in the cache.

:::info
Month range codes are simply a string YYYY-MM_YYYY-MM e.g '2025-08_2025-09'.
:::

## Processing

The raw times data has to be processed into something more useful for our purposes.

### Profiles

All time entries with a workflowId that matches a user in the redux profiles state will have their details hydrated. Else the given name in the entry will be used.

### Mapping

This system uses nested maps to arrange its data. These nested maps reflects the BillableHoursByProfileTable. All hours are calculated by adding up the hours of the entries below it, starting from tasks.

This is what the processed hashmap looks like (The exact names are abstracted):

```js
{
  Practice: {
    totalOfProfilesHoursByMonth: list;
    Profiles: {
      totalOfJobsHoursByMonth: list;
      Jobs: {
        totalOfTasksHoursByMonth: list;
        Tasks: {
          billable: Boolean;
          hours: num;
          date: string;
        }
      }
    }
  }
}
```

This is all done in `useJobData`. It is not done in the selector as that is a synchronous process that risks blocking the UI from rendering properly. By running this asynchronously, some functionality can be retained while the data is being processed.

### Exceptions

There are numerous exceptions in the data that must be made to product the correct result. There are already default exceptions hard coded into the system, however the JobConfigurationPanel can call handlers from useJobData to edit these. An original copy of the original data has to be maintained so that these changes can be reversed within the session.

:::info
These exceptions can include ignoring a job in the calculations, re-categorising a job as billable or non-billable, etc.
:::

### Table

The `BillableHoursByProfileTable` Is a nested expandable table that displays the processed hashmap. 

### Graphs

The `BillableVsNonBillableHoursByMonthGraph` is a line graph that shows hours vs months. It should be given processed data for the primary and secondary axis (i.e it cannot just received the original processed data). This is done via helper functions in the parent component.
