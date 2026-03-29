---
id: ua-hook
title: Hook
sidebar_label: Hook
sidebar_position: 2
last_update:
  date: 2026/03/30
  author: Ijaan Yudana
---

# useUtilisation

This hook takes user inputs and triggers the redux `API` to query the database. It: 
- Double checks if the other has the requirements to access utilisation data.
- Retrieves the error and loading states for the relevant `API`s 
- Sends the retrieved raw data to the `utilisationDataProcessor` to transform the data into a form suitable for the `forecasting table`.

## Notes

- JobmanagerId is not required, as the email is used instead because it is verifiable via the jwt token (And the job manager Id sometimes doesn't load in the Auth (???))
