---
id: utilisation-overview
title: Overview
sidebar_label: Overview
sidebar_position: 1
last_update:
  date: 2026/03/25
  author: Ijaan Yudana
---

This section explains the `UI` for the forecasting pages. 

[Table](./table.md) Explains the data displayed for each row.
[Pages](./pages.md) Explains what each page `index` file does.

:::info
[Click here](../../../cloud/Cloud%20Functions/Topics/utilisationanalytics.md) to see how the cloud functions backend works.

or

[Click here](../../../clientside-data/Systems/Forecasting/Overview.md) to see how the front-end data layer works.
:::

This is a page that pulls from `utilisation-analytics` and `utilisation-forecasts`. It will show the user both the actual hours for a job, and allow for the input of forecasting per user.

This feature is split across two pages, `job-manager forecasting` and `utilisation forecasting`.

`job-manager forecasting` Is only accessible by `job managers` and uses the `restricted` API so that they correctly query the database - which has `firestore rules` that restricts `job managers` to only be able to view data related to jobs they manage.

`utilisation forecasting` Is only accessible by `finance` users and uses the `unrestricted` API that efficiently queries for all jobs.

### Current month

The current month is included under `forecasts`.
