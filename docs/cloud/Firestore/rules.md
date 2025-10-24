---
id: firestore
title: Firestore Rules
sidebar_label: Firestore Rules
sidebar_position: 2
last_update:
  date: 2025/09/24
  author: Ijaan Yudana
---

Firestore rules are crucial in ensuring the security of data. Even if you restrict data than can be retrieved by the frontend via the api in redux, always assume that someone can try to manually `curl` the database.

Firestore rules is the `only` form of security that the firestore database has, so make sure that it's up to date. You can find these rules in the firestore.rules file.

:::tip
firestore rules works really well with `customClaims`. You can simply check the requests' token to see their roles e.g `request.auth.token.admin`
:::

Right now, we still use the legacy rbac system as a fallback, thus if you're setting rules for a new `collection`, you'll need to make an exception for it

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
