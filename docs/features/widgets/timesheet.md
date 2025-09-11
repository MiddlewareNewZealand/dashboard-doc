---
id: timesheet-widget
title: Timesheet Widget
sidebar_label: Timesheet
sidebar_position: 3
last_update:
    date: 11/08/2025
    author: Ijaan Yudana
---

# Timesheet Widget

A button widget that deeplinks to the current user's workflowmax timesheet. It should be disabled if the link is broken.

## Parameters

- `userWorkflowId`: Retrieved from `redux` using `selectCurrentUserWorkflowId`. This data is called from the [`profiles collection`](../cloud-storage/Firestore/Collections/firestore-profile) in firestore.

- `workflowAccountId`: Called from the [`config collection`](../cloud-storage/Firestore/Collections/firestore-config) in firestore. 

## Relevant DashboardConfig fields

id: `timesheets`

title: `Timesheets`

type: `timesheets`

category: `Finance`

enabled: `true`

