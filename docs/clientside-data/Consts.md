---
id: clientside-data-consts
title: Consts
sidebar_label: Consts
sidebar_position: 3
last_update:
  date: 2025/12/3
  author: Ijaan Yudana
---

Consts are refers to by redux actions, reducer, and epics to establish what part of the pipeline a request is in. The current convention is to have a `REQUEST`, `ERROR`, and `SUCCESS` constant for each pipeline.

e.g

```js
const DATA_CONSTS = {
    GET_DATA_REQUEST='DATA/GET_DATA_REQUEST',
    GET_DATA_ERROR='DATA/GET_DATA_ERROR',
    GET_DATA_SUCCESS='DATA/GET_DATA_SUCCESS',
}
```

:::info
The name of the directory is added to the string to ensure that each value is unique across redux.
:::