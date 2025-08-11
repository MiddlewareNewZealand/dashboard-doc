---
id: widgets
title: Widgets
sidebar_label: Widgets
sidebar_position: 1
last_update:
    date: 11/08/2025
    author: Ijaan Yudana
---

# Widgets

Widgets are items with additional functionality that a user can add to their dashboard. 

The available widgets and some additional data is listed in `DashboardConfig.js` with the following format:

```js
{ id: 'quick-links', title: 'Quick Links', type: 'quick-links', category: 'Links', enabled: 'true' },
```

The selection of the widgets occurs on `pages/settings/index.js`. The rendering of the widgets on the dashboard occurs on `pages/index.js`

## Adding a widget

- [ ] Add a widget to the `components/widgets` directory
- [ ] Add an entry with appropriate data in the `AVAILABLE_WIDGETS` field in `Dashboard.Config.js`
- [ ] `import` the widget into `pages/index.js` and add a `case`, matching to the `type` field in `AVAILABLE_WIDGETS`, returning the rendered `widget`.
