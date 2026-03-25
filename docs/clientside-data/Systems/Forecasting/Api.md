---
id: ua-api
title: Api
sidebar_label: Api
sidebar_position: 2
last_update:
  date: 2026/03/25
  author: Ijaan Yudana
---

# Utilisation API

```mermaid
    graph TD;

    entry{Job Manager or Forecast Mode} --Job Manager--> restricted[Restricted Pathway]
    restricted --> index[Get list of jobs owned by the job manager from the job manager index]
    index --> jobs[Get full job data]
    jobs --profile ids from 'staffAssigned' param in each job--> profiles[Get profile data from aggregated list of assigned profiles]
    profiles --> months[Get timesheet data by querying all jobId-profileId combinations for months in given range]
    months --> forecasting[Get forecasting data by querying all jobId-profileId combinations for months in given range]
    forecasting --> return[Return raw data results]

    entry --Finance--> unrestricted[Unrestricted Pathway]
    unrestricted --> urmonths[Get all timesheet data in month range]
    urmonths --> urjobs[Get all jobs in month range]
    urjobs --> urprofiles[Get profiles assigned to retrieved jobs]
    urprofiles --> urforecasts[Get forecasts in month range]
    urforecasts --> return
```

## Notes:

- Timesheet data is held, sorted by month, in the utilisation_analytics-months collection
- Restricted must query individually because firestore cannot have dynamic rules for LIST queries

## Is job in range calculation

- Is not in range if complete and has ended before the given start date 
- Is not in range if the job start date is after the given end date
- Is in range if not complete
