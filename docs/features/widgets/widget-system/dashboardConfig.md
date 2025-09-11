---
id: dashboardConfig
title: dashboardConfig
sidebar_label: dashboardConfig
sidebar_position: 2
last_update:
    date: 2025/09/11
    author: Ijaan Yudana
---

## Overview

This file handles `configuring` the dashboard widget system. It mostly consists of key `enums` that handle finding directories in the user's `local storage`, and the particular config for each `available widget`.

## AVAILABLE_WIDGETS
This is the structure of the available widgets list with explanations for key fields.
```json
export const AVAILABLE_WIDGETS = [
  { 
    id: 'example-id', 
    title: 'Example Title', // Title in WidgetCard
    type: 'example-type', // How it is selected to be rendered in pages/index
    category: 'example-category', // Grouping in DroppableAvailableArea
    enabled: 'true', // If false, will display "coming soon"
    urls:{ // Urls to be displayed in header
      'page': { // Title displayed in UrlButton 
        url: ROUTE_EXAMPLE(), 
        rbac:[EXAMPLE_ROLE_A, EXAMPLE_ROLE_B], // Required roles for the UrlButton to be visible to the user
        desc: 'Go to example page', // Tooltip popup 
      }
    },
    rbac: [EXAMPLE_ROLE_A, EXAMPLE_ROLE_B] // Required roles for the widget to be visible to the user
  },
```

## DEFAULT_LAYOUT
This is the default `layout` and `widget`s to display if the user has not configured their dashboard