---
id: clientside-data-epics
title: Epics
sidebar_label: Epics
sidebar_position: 4
last_update:
  date: 2025/12/3
  author: Ijaan Yudana
---

Epics are triggered when actions are dispatched. They call the relevant api function, reducer, and automatically handle side-effects.

e.g

```js
export const getData = (action$) =>
  action$.pipe(
    ofType(ACTIONS.GET_DATA_REQUEST),
    switchMap((action) => {
      const { isAdmin } = action.payload;
      // Api call
      return fetchData({
        isAdmin,
      }).pipe(
        // Success
        map((data) => ({
          type: ACTIONS.GET_DATA_SUCCESS,
          payload: data,
        })),
        // Error
        catchError((error) =>
          of({
            type: ACTIONS.GET_DATA_ERROR,
            payload: error.message || "Failed to get data",
          })
        )
      );
    })
  );
```
