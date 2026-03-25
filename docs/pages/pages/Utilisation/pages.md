---
id: utilisation-pages
title: Pages
sidebar_label: Pages
sidebar_position: 2
last_update:
  date: 2026/03/25
  author: Ijaan Yudana
---

# Utilisation Layout

This component sets up the page contents (`Param select` and `forecast table`) and takes in the configuration objects from the page `index` file.

# Containers 

Renders alternative statuses when the following side effects are encountered:
- No Permission
- Errors
- Loading
- Invalid date input

Passes parameters to the `hook` and adds appropriate configurations:
- JOB_MANAGER/FORECASTING mode as appropriate

# Job Manager

## Table Configuration

### Displayed buttons

- expand/collapse 

## Row configuration

- don't display manager field (Job managers can only see their own jobs)

## Param Select Options

### Quick buttons

- Start date: Past 0, 3, 6, 9, 12 months
- End date : Future 0, 3, 6, 9 months
- Full Range: current financial year

# Forecasting

## Table Configuration

### Displayed buttons

- display all buttons 
    - job/profile/practice 
    - expand/collapse
    - override

## Row configuration

- display manager field

# Param Select Options

## Quick buttons

- Start date: Past 0, 3, 6, 9, 12 months
- End date : Future 0, 3, 6, 9 months
- Full Range: current financial year


