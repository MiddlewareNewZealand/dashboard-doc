---
id: rbac-api
title: API
sidebar_label: API
sidebar_position: 1
last_update:
  date: 12/08/2025
  author: Ijaan Yudana
---

# API

Api documentation for `rbac.api.js`
## Functions

### getAllRoles

Retrieve `rbac roles` from the `redux store` using `getRoles`

#### Params:

#### Returns:

- `rbac-roles collection` || `error`

### getStaffRoles

Retrieve `rbac profiles` from the `redux store` using `getStaffRoles`

#### Params:

#### Returns:

- `rbac-profiles collection` || `error`

### getProfileRoles

Same as getStaffRoles(???)

### updateRoles

Given a `workflowId` and `roles` to `update`, `update` appropriate entry in `rbac-profiles`. If length `roles`, remove roles.

#### Params:

- `workflowId` string
- `roles` array of roles

#### Returns

```js
observer.next(roles); || observer.error
```

### addRoles

Set a given list of `roles` to an entry based on a given `workflowId` in `rbac-profiles`

#### Params:

- `workflowId` string
- `roles` list of roles

#### Returns:

```js
observer.next(roles); || observer.error
```

### removeRole

Remove a `role` from `rbac-profiles` at a given `workflowId`

#### Params:

- `workflowId` string

#### Returns:

```js
observer.next(workflowId); || observer.error
```

### getAllRolesPermissions

Get all `rolesPermissions` from `rbac-roles-permissions`

#### Params:

#### Returns:

```js
observer.next(rolesPermissions); || observer.error
```

### addRolePermission

### removeRolePermission

### getRoles

Given a `querySnapshot` return data

### getRoles Permissions

Given a `querySnapshot` return data