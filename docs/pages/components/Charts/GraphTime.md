---
id: graphtime
title: GraphTime.js
sidebar_label: GraphTime.js
sidebar_position: 1
last_update:
  date: 2025/08/27
  author: Ijaan Yudana
---

# GraphTime

GraphTime is the component that renders a ReactChart given a set of times which can be found in the redux store.

:::warning
ReactChart uses react-charts v2 beta which has had it's documentation deprecated. Consider updating to a more recent version. If you can find documentation, please add it to these docs.
:::

## ReactChart

To cut off empty data, all data 3 years into the past is filtered out via the `cutoffDate` const. If you find this is cutting off important data, this is where to first look at.

## CustomTooltip

A custom tooltip is used to extract all overlapping data at a point and sync it to `filteredTimes`. The default tooltip itself reduced to a pointer as the data is displayed in the card tooltip.

## CardTooltip

To avoid the issues associated with using a tooltip displaying a tables worth of data, data is extracted from the `customTooltip` and put into the CardTooltip, where the data is listed out. This also is wrapped in a box as a card creates a border and shadow, which conflicts with the div that the GraphTime is wrapped in. (Consider changing this)

This card displays the following data:

| | Title |JUSTIFY_BETWEEN| TIME |
|---|---|---|---|
|COLOUR_ICON|LABEL|JUSTIFY_BETWEEN|VALUE|
|TOTAL| |JUSTIFY_BETWEEN|VALUE|

Associated values:

- TIME = `tooltipData.primaryValue`
- COLOUR_ICON = `dataPoint.color`
- LABEL = `dataPoint.seriesLabel`
- VALUE = `dataPoint.value`

:::tip
    Right now the code is a little messy because it works as is. Consider extracting and wrapping the components into their own component for more readable code.
:::