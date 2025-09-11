---
id: widgetcard
title: Widget Card
sidebar_label: Widget Card
sidebar_position: 2
last_update:
    date: 2025/09/11
    author: Ijaan Yudana
---

## Overview

`WidgetCard` is a component that holds the `content` of a widget component, as well as providing additional functionality. 

### Params
- title
    - String
- content
    - A given widget `component`
- widgetConfig
    - Key information from `dashboardConfig` regarding the `widget` from the `AVAILABLE_WIDGET` hashmap.

### Returns
- A `collapsible` card that holds given `content`, with a `title`, and if available `rbac` protected `hyperlinks` in the header.

## Features

- Title
- Actions
    - Collapse (via a "^" button)
    - Hyperlinks filtered based on rbac permissions. These should be internal links and are configurable in `AVAILABLE_WIDGETS`
- Content
    - The given widget `component`

