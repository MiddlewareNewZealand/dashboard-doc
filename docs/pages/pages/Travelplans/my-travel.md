---
id: mytravel
title: My Travel
sidebar_label: My Travel
sidebar_position: 2
last_update:
  date: 2026/03/30
  author: Ijaan Yudana
---

# My Travel Page

:::note
'/index' is in parantheses because it is not included in the url, but it the file name under the pages directory. 

i.e pages/foo/index.js -> pages/foo (In the browser url)

'/request' is in parantheses because it may be included if the data involved is for a `pending travelplan`
:::

### My travelplans table
#### travelplans(/index)

Retrieves a list of the user's approved and pending travel plans, with the plans of all other users filtered out. Here, the user can check
their plans' details, edit them, and submit new (pending) travelplans.

The filtering and sorting is done in the `MyTravelPlansContainer`

### My travelplans request
#### travelplans/request(/index)

If a user clicks on the `request travel` button, they are sent to the `travelplans/request` page. This will open the `RequestTravelForm` in `FORM_MODES.CREATE` mode. The user can input data and submit a `pending travelplan` to be approved by an `admin`.

### My travelplans detail
#### travelplans(/request)/detail
If a user clicks on of their travelplans from the `MyTravelPlansTable`, they will be sent to one of two pages, depending on whether the plan was an `approved` or `pending` travelplan.

If they are viewing an `approved travelplan`, it will open the `TravelPlanForm` in `FORM_MODES.VIEWS` mode (readonly) at the `travelplans/detail` path. In this mode, the user can see extended details, such as `sensitive` data. This is also used in the `widget` so that users can view other user's `approved travelplans`, though they cannot see `sensitive` data (If they are not an `owner`).

If they are viewing a `pending travelplan`, it will open the `RequestTravelForm` in `FORM_MODES.VIEWS` mode (readonly) at the `travelplans/request/detail`. In this mode, the user can also see extended details.

### My travelplans edit
#### travelplans(/request)/edit

If a user clicks on the edit icon of a `pending travelplan` from the `MyTravelPlansTable`, they will be sent to `travelplans/request/edit`. It will open the `RequestTravelForm` in `FORM_MODES.EDIT` mode. In this mode, the user can also see extended details and edit parameters.

:::info
Only `pending travelplans` are editable by owners. This is because they are `requests`. `approved travelplans` are set by admins and are readonly to other users.
:::
