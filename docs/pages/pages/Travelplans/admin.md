---
id: travelplans-admin
title: Admin
sidebar_label: Admin
sidebar_position: 3
last_update:
  date: 2026/03/30
  author: Ijaan Yudana
---

Admins have their own pages, which hold admin-only operations. Admins can also see every user's travelplans.

## Admin Specific Pages

### Admin Portal
#### travelplans/admin(/index)

From this page, admin users can view `approved` and `pending` travelplans of all users (Via the tab at the top of the table). They can `approve`, `view` or `edit` `pending travelplans`, or `create`, `edit`, or `view` `approved travelplans`.

### Approve Pending Plan
#### travelplans/admin/approve

When a `pending plan` listitem is selected from the admin portal, the `TravelPlanForm` is opened in `APPROVE` mode. It will `autofill` with data from the `pending plan`. When the rest of the required fields are filled, the user can `submit` the finalised `approved travelplan`. This will add a new `approved travelplan` and remove the old `pending travelplan` from firestore.

### Create Approved Plan
#### travelplans/admin/create

Admin users can `create` new `approved travelplans` from scratch. When the rest of the required fields are filled, the user can `submit` the finalised `approved travelplan`. This will add a new `approved travelplan` to firestore.

### Edit Approved Plan
#### travelplans/admin/edit

Admin users can `edit` existing `approved travelplans`, with the results being submitted to firestore.

:::note
Admins can also edit `pending travelplans`, they use the `travelplans/request/edit` page, as it is not admin exclusive.
:::


