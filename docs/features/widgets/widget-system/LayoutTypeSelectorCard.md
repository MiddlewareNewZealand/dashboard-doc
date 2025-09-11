---
id: layout-type-selector-card
title: LayoutTypeSelectorCard
sidebar_label: LayoutTypeSelectorCard
sidebar_position: 2
last_update:
    date: 2025/09/11
    author: Ijaan Yudana
---

## Overview

This Card can:

- Change the `layout type` in `local storage`
- Reset the `layout` in `local storage`

The Icons are svg renders stored in the component (`OneColIcon`, `TwoColIcon`, `ThreeColIcon`). All functions are passed from the `settings/index` parent component. This component doesn't have any ability to generate or change data independently.

### Params

- `layoutType` The current layout type
- `setLayoutType` Function to set `layoutType` 
- `handleResetLayout` Function to `reset` the current `layout`

### Returns

- React component
