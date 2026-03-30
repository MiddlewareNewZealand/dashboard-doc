---
id: pages
title: Pages
sidebar_label: Pages
sidebar_position: 1
last_update:
  date: 2026/03/31
  author: Ijaan Yudana
---

This directory holds documentation concerning the dashboards' various pages. 

There is currently nothing that stops users from directly accessing a page. If page access is restricted, the developer must establish some way to check the user's roles (checkRoles([...roles])) and return a `NoPermissionCard` if the user lacks a given role. (See [best practices](../../getting-started/Best%20Practices/frontend.md))

:::info
TODO: Make a system to return a 404 page to non-permitted pages. `routes.js` could be a useful place to start.
:::

## Sidebar

The sidebar is available on every page as it is part of the `defaultLayout`. It is configured via `AppMenuConfig` and takes an `rbac` parameter to selectively display items to users.

