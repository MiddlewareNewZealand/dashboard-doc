---
id: overview
title: Overview
sidebar_label: Overview
position: 1
last_update:
  date: 2025/10/24
  author: Ijaan Yudana
---

Page widgets are simply widgets that are direct representations of pages. These widgets should link to these pages, but also can/should be simplified to suit a widget format. Some directly use components from their parent pages (isWidget checks should be added in this case) while other widgets require custom layouts.

:::info
These often recycle components from pages, an isWidget prop can be used to conditionally format components. Width can be defaulted to the largest BREAKPOINT if width detection is dependent on something external e.g `useWidgetProperties()`
:::