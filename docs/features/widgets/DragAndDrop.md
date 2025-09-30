---
id: dnd
title: useDragAndDrop
sidebar_label: Drag and Drop
sidebar_position: 2
last_update:
    date: 2025/09/30
    author: Ijaan Yudana
---

# Overview

The drag and drop hook manages three functions:

- Calculating and providing widgets for `AvailableArea`
- Dragging widgets from the `AvailableArea` to the `GridArea`
- Updating persistent widget data within the `GridArea`

## Init

Try to load `widgets` and their positions + dimensions from `local storage` and filter out widgets that the user lacks the roles for.

## Available Area

When in AvailableArea, the widgets are just skeletons with the bare minimum of information (category, enabled, id, min height and width, title)

If a skeleton is dragged, set the activeId as that of the dragged widget. On drag end, detect what nodeRef the widget is over and act accordingly.

Any changes trigger `onLayoutChange` which will save the changes to localstorage. If over `GridArea` find an empty spot, else return to `AvailableArea`.

## Grid Area

You cannot drag from `GridArea` to `AvailableArea`. This is because there are overlapping drag systems, resulting in strange visual behaviour. 

Any change in `Layout` triggers the `onLayoutChange` function which saves the changes to local storage (MWNZ/DashboardResponsiveGridLayout)

:::info
This is the level that the `WidgetFrame`s are rendered. They are memoized to prevent unnecessary re-renders, especially as the grid is frequently re-rendering during dragging.
:::

## Index

Index is a simple layout that contains both `AvailableArea` and `GridArea`. It is also the level on which the `DndContext` is held.





