---
id: firestore-rules
title: Firestore Rules
sidebar_label: Firestore Rules
sidebar_position: 3
last_update:
  date: 2026/02/10
  author: Ijaan Yudana
---

# Firebase Security Rules

[Official documentation](https://firebase.google.com/docs/rules)

:::tip
[Click here](../cloud/Firestore/rules.md) For advice on how to write firestore rules for this project.
:::

Firebase `security rules` restrict `read`/`write` access to data collections/directories based on given parameters. In our case, we make use of `custom claims`, which can be `read` from the user's auth `data`.

This is where the data is secured. So make sure that the security rules are set correctly.

## Granular Control

One of the benefits of using `custom claims` is that checking permissions, even to a very deep level of granularity, is quite simple. e.g

```js
match /foo/{bar}{
    allow read: if isAuth();
    allow write: if isAdmin();
}
```

You could have very specfic `claims` if you want even more granular permissions e.g

```js
match /foo/{bar}/{woo}{
    allow read: if canReadThisSuperSpecificField();
    allow write: if canWriteToThisSuperSpecificField();
}
```

However users can only have 1000 characters worth of custom claims per user, so keep them general.

Furthermore, you can nest match statements to access subcollections/documents.

```js
    match /collection/{doc} {
      allow read: if condition();
      allow write: if condition();

      match /subcollection/{subdoc} {
        allow read: if condition();
        allow write: if condition();
      }
    }
```


## Functions

There are several useful functions in the firestore rules, although as they get more complex, it would be good to refactor them to be more general.

### isXRole()

This type of function is intended to be a neater way to quickly check common roles / authentication statuses, instead of writing "request.auth.token.X" for every check.

```js
function isAuth() {
  return (
    request.auth != null &&
    request.auth.token.email.matches(".*@middleware[.]co[.]nz$")
  );
}

// Custom claims checks
function isSMT() {
  return isAuth() && request.auth.token.smt == true;
}
```

### TO DO:

This could be simplified i.e

```js
function canAccess(validRoles) {
  return isAuth() && getToken().includes(validRoles);
}

function isAuth() {
  return request.auth != null && getToken().matches(".*@middleware[.]co[.]nz$");
}

function getToken() {
  return request.auth.token;
}
```

### canRead/Write X

You can make functions that can give a `boolean` based on the result of checking another collection i.e

```js
function canReadRecord(recordData) {
      return isAuth() &&
        isJobManager() &&
        exists(/databases/$(database)/documents/utilisation_analytics-job_manager_index/$(recordData.jobId)) &&
        get(/databases/$(database)/documents/utilisation_analytics-job_manager_index/$(recordData.jobId)).data.email == request.auth.token.email;
    }
```

:::info
Note that email is **always** used as an identifier. This is because the only id's that the custom claim stores is the `email` and `google uid`. There is **no** `ipayrollId` or `workflowId`.
:::

#### TO DO:

This should be simplified to be more flexible and non-opinionated. For example:

```js
function canReadData(data, id, collection, subcollection, validRoles){
    return canAccess(validRoles) && 
            exists(getRoot(collection, subcollection)/$(data[id])) &&
            get(getRoot(collection, subcollection)/$(data[id])).data.email === getToken().email
}

function getRoot(collection, subcollection){
    if(subcollection) return /databases/$(database)/documents/$(collection)/$(subcollection)

    return /databases/$(database)/documents/$(collection)
}

```