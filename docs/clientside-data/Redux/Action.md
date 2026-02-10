---
id: clientside-data-action
title: Action
sidebar_label: Action
sidebar_position: 2
last_update:
  date: 2025/12/3
  author: Ijaan Yudana
---

Actions are called by hooks and can be given `parameters` which are to be added to a `payload`. They should also be assigned a `type` which is often a `constant` that refers to the first state in a fetch request. The current type naming convention for most actions is something like `GET_DATA_REQUEST`

Example:

```js
export const getData = (isAdmin) => ({
  type: dataConsts.GET_DATA_REQUEST,
  payload: { isAdmin },
});
```

:::info
Sometimes the constants are stored in the same directory as the actions.
:::
