---
id: leave
title: Leave
sidebar_label: Leave
last_update:
  date: 2025/10/09
  author: Ijaan Yudana
---

# Overview

The leave widget displays employees on leave in daily, weekly, and monthly formats.

## Views

The view buttons in the menu are configured in the widget config and rendered as a `view` type in `ControlMenuItems`, setting the `selectedView` as their value, e.g `daily`, `weekly`, `monthly`. 

There are two layouts. `LeavePaged` and `LeaveWeeklyLayout`. `LeavePaged` handles both weekly and monthly views (With ternary operators to render differently based on the `view`).

## LeavePaged

LeavePaged is a simple list with `user info` to the left and `leave info` to the right. Certain elements will become hidden as the width decreases. The `monthly` only displays the date span of the employee's leave period in the `leave info`, while `daily` shows many days till their leave period is over.

## LeaveWeeklyLayout

This layout uses a table to display the days employees are off on a particular week. It will span cells if next to eachother and each row is used by only one employee. Only the icons are hidden when the size becomes small, otherwise it simply compresses.

:::info
The return date is the next working day the employee returns to work.
:::

