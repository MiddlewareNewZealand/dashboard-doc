---
id: travelplans
title: Travel Plans
sidebar_label: Travel Plans
sidebar_position: 5
last_update:
  date: 2025/10/09
  author: Ijaan Yudana
---

# Overview

The travelplans widget shows a list of approved plans, with the menu listing links to the travel request and admin pages (with notif numbers)

## Menu

This menu is configured in widgetconfig. 
- counter, the notification number to be displayed (admin and non-admin actions to take)
- icon, icon to display
- desc, tooltip
- rbac, who can access this particular menuitem

### Admin

Links to `travelplans/admin`. The notifNum is the number of pending_travelplans to process. Only accessible to admins.

### MyTravel

Links to `travelplans`. The notifNum is the number of pending_travelplans awaiting approval.

## List

Is a list of travelplans, with the closest date being listed first. It doesn't show any travelplans that have passed. 