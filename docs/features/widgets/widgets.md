---
id: widgets
title: Widgets
sidebar_label: Widgets
sidebar_position: 1
last_update:
    date: 2025/09/30
    author: Ijaan Yudana
---

# Widget system

The widget system uses `react-grid-layout` for its dashboard engine (Resizing, moving etc.) and `dnd-kit` for its drag and drop system. These are linked to the `local storage` (`MWNZ/DashboardResponsiveGridLayout` and `MWNZ/DashboardWidgetData`) for persistence across sessions via the `useDragAndDrop` hook (Which manages both the dashboard grid and dnd system). 

Each widget is wrapped in a `WidgetFrame` which is in turn wrapped in a `WidgetProvider`. The `WidgetFrame` provides formatting and functions such as a `drag handle`, `popup menu`, and other UI functions such as `scroll detection`. The `WidgetProvider` allows for widgets in the context to pass up values to the `WidgetFrame`. e.g `notif numbers` and `view changes`. You can even pass up any `React Component` to be rendered on the widget if your widget has unique requirements.

The `WidgetConfig` is where each widget is configured. You can add a list of actions to be rendered in the icon. You can use the `type` to add unique handling in the `WidgetFrame` (e.g associate it with a particular key in the local storage widget data directory).

## Local Storage

Only the relevant data is stored in local storage directories of which there are two.

`MWNZ/DashboardResponsiveGridLayout` Only stores data relevant to `react-grid-layout` i.e dimensions (with min and max values), positions, id.

`MWNZ/DashboardWidgetData` Only stores persistent data per widget. This data can be arbitrary, with widget ids as the key. These are separate as this doesn't need to be pulled on every update.

## Adding a widget

To add a widget, add a config to `WIDGET_LIST` in `WidgetConfig`. Then add a `component` to the `WidgetRegistry`. Please make a new `widget component` under the widgets directory. This is to avoid (conflicts with the `Widget Provider`)[./DragAndDrop.md]