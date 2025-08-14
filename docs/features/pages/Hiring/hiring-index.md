---
id: hiring-page-index
title: Index
sidebar_label: Index
sidebar_position: 2
last_update:
  date: 2025/08/11
  author: Ijaan Yudana
---

# Index Page

![ index page ](./img/index-page.png)

## Tabs

Tabs filter profiles based on the `tab selected`, and the index of the associated `APPLICATION_PROGRESS_VALUE`.

### Key consts

These two consts' indexes matter. e.g if the index of `"Applied"` in `TABEL_LABELS` is 1, than `stage.APPLIED` in `APPLICATION_PROGRESS_VALUES` should be 1 as well.

#### `TAB_LABELS`

A list of tab labels in the order they should be rendered.

#### `APPLICATION_PROGRESS_VALUES`

A list of stage enums in order, matching `TAB_LABELS`. These are used to filter out profiles based on the selected tab. 


## Search Bar

Uses Material UI's [`Autocomplete`](https://mui.com/material-ui/react-autocomplete/), [`Chip`](https://mui.com/material-ui/react-chip/), and [`Textfield`](https://mui.com/material-ui/react-text-field/) to achieve a tag-like search system similar to the one [here](https://mui.com/material-ui/react-autocomplete/#multiple-values).

It matches based on all fields in [`profile`](../../cloud-storage/Firestore/Collections/profile.mdx), particularly on the skills list which is extracted upon cv upload. The match button changes the filter between an AND and OR operator, either only including results that match all parameters, or including results that just match one.

In the future this might need to use a search engine as the list of profiles grow. This has been moved to a component called TagSearchbar for increased modularity, maintanability and readability.

## Profile List (Table)

Displays a `paginated` list of `profiles` from the [`profile` collection](../../cloud-storage/Firestore/Collections/profile.mdx) filtered based on the `selectedTab`, `searchTerms`, and `matchMode`.

Each `ProfileRow` component will display the user's `icon`, `name`, `email`, `phone`, `current stage`, `application date`, and `delete button`.

Clicking on the `icon` or `name` will send the user to the profile's [`detail page`](../Hiring/hiring-detail.md).

Clicking on the `email` will send the user to their email app.

Clicking on the `delete button` will provide a confirmation dialog on deleting the selected profile.

## Add Applicant Button

A `button` above the `profile list table` that prompts the user with a [`HiringApplicationForm`](../Hiring/hiring-application.md) dialog.
