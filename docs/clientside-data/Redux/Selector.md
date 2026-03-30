---
id: clientside-data-selector
title: Selector
sidebar_label: Selector
sidebar_position: 7
last_update:
  date: 2026/03/30
  author: Ijaan Yudana
---

Selectors are used to retrieve data from the redux state (Assumedly after data has been added to it via the reducer)

```js
const selectProfilesState = (state) => state.profiles; // See redux state for what is available (In next dev mode)

export const selectProfiles = createSelector(selectProfilesState, (state) => state.profiles); // This is called elsewhere to retrieve the data
```
