---
id: Droppable-available-area
title: DroppableAvailableArea
sidebar_label: DroppableAvailableArea
sidebar_position: 2
last_update:
    date: 2025/09/11
    author: Ijaan Yudana
---

## Overview

This is where `available widgets` (Widgets not in the widget preview) are held. While it is techncally a `DndContext` (Drag and drop context) zone, it has to be `wrapped` in that context in the `parent component`.

`Widgets` are held in an `accordion`s. Each `accordion` hold a list of `widgets` of a particular `category`, and are sorted in alphabetical order. This sorting is done in the component.

There is a `card` that acts as a `header` to guide the user. It is all `wrapped` in a `box` to ensure proper formatting.

### Params
- `id` 
- `children` List of `widgets` to render in the `available area`
- `onRemove` Function to pass to the `DraggablePreviewCard` for it to call when it is placed in the `preview` area (Deleting it from the `available area`)

### Return
React component