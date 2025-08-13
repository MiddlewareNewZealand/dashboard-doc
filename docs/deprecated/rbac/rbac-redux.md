---
id: rbac-redux
title: Redux
sidebar_label: Redux
sidebar_position: 2
last_update:
  date: 12/08/2025
  author: Ijaan Yudana
---

# RBAC Redux

This page describes the RBAC redux system.

## Default state

```js
const defaultState = () => ({
  roles: null,
  profilesRoles: null,
  rolesLoading: true,
  profilesRolesLoading: true,
  rolesError: null,
  profilesRolesError: null,
  profileRoles: null,
  profileRolesLoading: true,
  profileRolesError: null,
  snackbarMessage: null,
  rolesPermissions: null,
  rolesPermissionsLoading: false,
  rolesPermissionsError: null,
});
```

## Init Example

```
rbac: Object { rolesLoading: false, profilesRolesLoading: true, rolesError: "Permission denied", … }
profileRoles: null
profileRolesError: null
profileRolesLoading: true
profilesRoles: null
profilesRolesError: null
profilesRolesLoading: true
roles: null
rolesError: "Permission denied"
rolesLoading: false
rolesPermissions: null
rolesPermissionsError: null
rolesPermissionsLoading: false
snackbarMessage: null
```

## Post Auth Example

```
{
  "roles": [
    {
      "description": "role1",
      "name": name1"
    },
    {
      "description": "role2",
      "name": "name2"
    },
    ...
  ],
  "profilesRoles": null,
  "rolesLoading": false,
  "profilesRolesLoading": true,
  "rolesError": null,
  "profilesRolesError": null,
  "profileRoles": null,
  "profileRolesLoading": true,
  "profileRolesError": null,
  "snackbarMessage": null,
  "rolesPermissions": null,
  "rolesPermissionsLoading": false,
  "rolesPermissionsError": null
}
```

## Functions

### rbacReducer

`Return` the result of a given `action` and write it into the `state`, or `return` the `state`, or `defaultState`.

Params:

- `state` = `defaultState()`, state with defaults
- `action`, an action defined in `rbac.actions.js`

Returns:

{ `...state`, `additional data` }|| `defaultState` || `state`

