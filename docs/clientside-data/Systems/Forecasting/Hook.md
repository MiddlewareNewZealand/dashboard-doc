---
id: ua-hook
title: Hook
sidebar_label: Hook
sidebar_position: 2
last_update:
  date: 2026/03/25
  author: Ijaan Yudana
---

# useUtilisation

This hook takes user inputs and triggers the redux `API` to query the database. It: 
- Double checks if the other has the requirements to access utilisation data.
- Retrieves the error and loading states for the relevant `API`s 
- Sends the retrieved raw data to the `utilisationDataProcessor` to transform the data into a form suitable for the `forecasting table`.

:::warning
It does seem that both the table and the hook sorts the processed data. Choosing one or the other could be a good optimisation.
:::
