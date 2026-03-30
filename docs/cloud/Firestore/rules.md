---
id: firestore
title: Firestore Rules
sidebar_label: Firestore Rules
sidebar_position: 2
last_update:
  date: 2026/03/12
  author: Ijaan Yudana
---

# Firestore Rules

:::tip
[Click here](../../security/firestore-rules.md) for more general advice on how to write these rules.
:::

Firestore rules are crucial in ensuring the security of data. Even if you restrict data than can be retrieved by the frontend via the api in redux, always assume that someone will try to query the database directly.

Firestore rules is the **only** form of security that the firestore database has, so make sure that it's up to date. You can find these rules in the firestore.rules file.

:::tip
firestore rules works really well with `customClaims`. You can simply check the requests' token to see their roles e.g `request.auth.token.admin`. There are several helper functions to provide a standardised way to do this, which is explained further down.
:::

:::warning
Any permission not explicitly set in firestore rules will default to no access.
:::

````js
  match /{collection}/{document=**} {
      allow read: if collection != 'pending_travelplans' &&
        collection != 'approved_travelplans' &&
        collection != 'hiring' &&
        collection != 'whereami-daily' &&
        hasReadAccess();
      allow write: if collection != 'pending_travelplans' &&
        collection != 'approved_travelplans' &&
        collection != 'hiring' &&
        collection != 'whereami-daily' &&
        hasWriteAccess();
    }
    ```
````

## Helper functions

There are three types of helper functions in firestore.rules

- Role checks
- Ownership checks
- Utilities

### Role checks

This simply test if a user's customclaims contains a given role. 

They are all self explanatory, except for `isStandard()` which checks if the user is authenticated to the database and has a middleware email domain.

### Ownership checks

These functions provide various ways to match a users `email` to a various `fields` in firestore. 

The `email` parameter has to be used because it is contained in the jwt token and cannot be manipulated by the user (The token is
verified by firebase). Otherwise, we would be reliant on identification provided by the front-end, which is not safe.

#### emailMatchesId

Checks if the user's `email` matches the `document` `id`.

### emailMatchesDocField

Checks if the user's `email` matches the 'email' `field` in the `document`. (This requires the document to have an email field)

### emailMatchesPathField

Checks if the user's `email` matches the 'email' `field` in a `document` of a given `path` (Lets you compare against documents in other
collections i.e an index. This also requires the document to have an email field.)

## Utilities

### buildPath

A tidier way to build a path string, mainly just removing the need to add `/databases/$(database)/documents` to every path.

Parameters:
- string: 'collection(/sub-collection)'
- string: document id
