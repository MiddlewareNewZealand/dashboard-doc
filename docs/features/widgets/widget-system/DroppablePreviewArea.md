---
id: droppable-preview-area
title: DroppablePreviewArea
sidebar_label: DroppablePreviewArea
sidebar_position: 2
last_update:
    date: 2025/09/11
    author: Ijaan Yudana
---

## Overview

- An area where you can drop `DroppablePreviewCards` from the `available area`
- It will display column outlines based on the current `layout type`
- An `overlay` will appear if a `DroppablePreviewCard` is picked up
- `DroppablePreviewCards` will show a `close button` when they are in a `preview` column
- You can also move `DroppablePreviewCards` between columns, and re-order them within columns

### Params

- `id`
- `children` List of `widgets` with appended information i.e `colId` (Should be from `local storage`)
- `layout` The current `layout type`
- `onRemove` A function to `remove` a `widget` from the `preview area` and its `layout` in the `local storage`

### Returns
React component

## Column Droppable

This is the column `component`. It displays a list of `widgets` in the order they are to be `rendered`.
It has an `empty` state, a `not empty` state, and an `overlay` that is triggered when `useDroppable` is `active`.