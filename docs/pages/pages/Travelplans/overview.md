---
id: travelplans-overview
title: Overview
sidebar_label: Overview
sidebar_position: 1
last_update:
  date: 2026/03/30
  author: Ijaan Yudana
---

Travelplans uses several pages for its various functions - avoiding `modals` for mobile friendliness.

## Pages

### My Travel
#### travelplans(/index)

This page is where users can view their own `pending` and `approved` travelplans. From here, users can also go to other pages to `view`, `edit`, or `create` their plans.

### Request Form
#### travelplans/request/edit
#### travelplans/request/detail
#### travelplans/request(/index) // create

These pages are where users can `view`, `edit`, or `create` their `pending travelplans`. These pages pull `pending travelplan` data, handle the side-effects, and configure the `RequestTravelForm` to the appropriate `view`/`edit`/`create` mode.

### Admin View
#### travelplans/admin(/index)

This page is where `admins` can view all `pending` and `approved` travelplans. From here, users can `create` `approved travelplans`, `approve` `pending travelplans`, `edit` `either travelplan`, and `view` `either travelplan`.

### Approve Form
#### travelplans/detail
#### travelplans/admin/create
#### travelplans/admin/edit

These pages are where users can `view`, `edit`, `create` or `approve` their `approved travelplans`. These pages pull `approved travelplan` data (Sometimes via containers), handle the side-effects, and configure the `RequestTravelForm` to the appropriate `view`/`edit`/`create` mode.

## Forms

These forms can transform their text fields from editable to readonly based on the `FORM_MODE` provided. This ensures that you only need to have one form for each data type (i.e pending/approved). They both use `hooks` (i.e useApproveForm / useRequestForm) to handle their business logic (autoloading, data submission, form object etc.)

:::info
It's not just swapping a `readonly` parameter, it will transform from whatever editable textfield is being used to a `typography` object, to make it absolutely clear that a field is `readonly`.
:::

### RequestTravelForm

This form handles `pending travelplans` and its `view`, `edit`, and `create` modes.

### ApproveTravelForm

This form handles `approved travelplans` and its `view`, `edit`, `approve`, and `create` modes.
