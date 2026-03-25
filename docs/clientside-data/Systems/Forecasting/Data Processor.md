---
id: ua-processor
title: Data Processor
sidebar_label: Data Processor
sidebar_position: 2
last_update:
  date: 2026/03/25
  author: Ijaan Yudana
---

Given a set of valid data, return data suitable for a given table layout.

:::info
Valid data is a map of data from each of the following collections:

utilisation_analytics-profiles
utilisation_analytics-jobs
utilisation_analytics-months
utilisation-forecasts
staff-working-hours
:::

```mermaid
    graph TD;
    entry --> viewMode
    viewMode --profile--> by profile
    viewMode --job--> by job
    viewMode --practice--> by practice
```

## By Profile

Compile a list of profile rows with aggregate data for that profile, as well as child job rows.

## By Job

Compile a list of Job rows with aggregate data for that job, as well as child profile rows.

## By Practice

Compile a list of practice rows with aggregate data for that practice, as well as child profile and child job rows.

:::info
By practice runs the byProfile processor to compile its child rows.
:::
