---
id: clientside-data-reducer
title: Reducer
sidebar_label: Reducer
sidebar_position: 6
last_update:
  date: 2025/12/3
  author: Ijaan Yudana
---

The reducer takes the results from an epic and adds them to the state. You should have a `case` for each possible outcome of a request.

e.g

```js
const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case ACTIONS.GET_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ACTIONS.GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload || [],
        loading: false,
        error: null,
      };
```

:::tip
If you have several different actions, you can get really specific and have a map of loading types. This can also prevent overwriting loading states which can cause problems in the frontend.

e.g

```js
loading:{
    squares:false,
    circles:false,
    triangles:false,
}
```
:::