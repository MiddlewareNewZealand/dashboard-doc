---
id: timesheet-widget
title: Timesheet Widget
sidebar_label: Timesheet
sidebar_position: 2
last_update:
    date: 11/08/2025
    author: Ijaan Yudana
---

# Timesheet Widget

A button widget that deeplinks to the current user's workflowmax timesheet. It should be disabled if the link is broken.

## Parameters

- `userWorkflowId`: Retrieved from `redux` using `selectCurrentUserWorkflowId`. This data is called from the [`profiles collection`](../firestore/Collections/profile.mdx) in firestore.

- `workflowAccountId`: Called from the [`config collection`](../firestore/Collections/config.md) in firestore. 

## Relevant DashboardConfig fields

id: `timesheets`

title: `Timesheets`

type: `timesheets`

category: `Finance`

enabled: `true`

