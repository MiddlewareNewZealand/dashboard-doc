---
id: firestore-rules
title: Firestore Rules
sidebar_label: Firestore Rules
sidebar_position: 3
last_update:
  date: 2026/03/31
  author: Ijaan Yudana
---

# Firebase Security Rules

[Official documentation](https://firebase.google.com/docs/rules)

:::tip
[Click here](../cloud/Firestore/rules.md) For advice on how to write firestore rules for this project.
:::

Firebase `security rules` restrict `read`/`write` access to data collections/directories based on given parameters. In our case, we make use of `custom claims`, which can be `read` from the user's auth `token`.

This is where the data is secured. So make sure that the security rules are set correctly.

## Granular Control

One of the benefits of using `custom claims` is that checking permissions, even to a very deep level of granularity, is quite simple. e.g

```js
match /foo/{bar}{
  allow read: if isAuth();
  allow write: if isAdmin();
}
```

You could have very specific `claims` if you want even more granular permissions e.g

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

There are several useful functions in the firestore rules.

### `isXRole()`

This type of function is intended to be a neater way to quickly check common roles / authentication statuses, instead of writing `request.auth.token.X` for every check.

```js
function isAuth() {
  return request.auth != null &&
    getRequestEmail().matches('.*@middleware[.]co[.]nz$');
}

function isStandard() {
  return isAuth();
}

function isSMT() {
  return isAuth() && request.auth.token.get('smt', false) == true;
}

function isJobManager() {
  return isAuth() && request.auth.token.get('job manager', false) == true;
}

function isFinance() {
  return isAuth() && request.auth.token.get('finance', false) == true;
}

function isAdmin() {
  return isAuth() && (
    request.auth.token.get('admin', false) == true ||
    request.auth.token.get('superadmin', false) == true
  );
}
```

Note the use of `.get('claim', false)` rather than direct property access — this safely handles cases where a claim is not present on the token, avoiding errors.

:::info
Email is **always** used as an identifier. This is because the only identifiers stored in the custom claim are the `email` and Google `uid`. There is **no** `ipayrollId` or `workflowId`.
:::

### Ownership Checks

These functions verify that the authenticated user owns or is associated with a given document.

#### `getRequestEmail()`

Returns the authenticated user's email from their auth token. Used as the base for all ownership checks.

```js
function getRequestEmail() {
  return request.auth.token.email;
}
```

#### `emailMatchesId(id)`

Checks whether the user's email matches a document ID directly. Used for collections where the document ID is the user's email (e.g. `quicklinks`, `widget-data`).

```js
function emailMatchesId(id) {
  return getRequestEmail() == id;
}
```

#### `emailMatchesDocField(doc)`

Checks whether the user's email matches an `email` field on a document map. Used when the document data is already in scope via `resource.data`.

```js
function emailMatchesDocField(doc) {
  return getRequestEmail() == doc.email;
}
```

#### `buildPath(path, docId)`

Constructs a fully-qualified Firestore document path from a collection path and document ID. Used as input to `emailMatchesPathField`.

```js
function buildPath(path, docId) {
  return /databases/$(database)/documents/$(path)/$(docId);
}
```

#### `emailMatchesPathField(path)`

Fetches a document at a given path and checks whether its `email` field matches the authenticated user. Used for index-based ownership checks — for example, verifying that a job manager is assigned to a particular job by looking them up in the job manager index collection.

```js
function emailMatchesPathField(path) {
  return exists(path) &&
    get(path).data.email == getRequestEmail();
}
```
