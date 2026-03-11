---
id: rules-test
title: rules.test
sidebar_label: rules.test
sidebar_position: 2
last_update:
  date: 2026/02/20
  author: Ijaan Yudana
---

This is where each test is defined, args are provided, and required functionality intialised.

## High level description

### Top level init

At the top level, the firebase test environment and seeder class are initialised.

:::info
Note that this requires firebase emulator which is initialised in `npm run test:firestore`.
:::

### Role level test

Each role has a set of tests wrapped in a description. This is necessary because each role has its own authenticatedContext (custom claims in this case), which can be shared between its tests.

This is also where seeder scenarios required of the role are initialised, using the top level seeder class.

### (sub)Collection test

Each set of collection (and subcollection) tests are wrapped in a description. Tests are called from `templates` and provided relevant args and/or scenarios.

```js
describe("profile collection", () => {
  t.canRead(`${COLLECTIONS.PROFILE}/id-123`);
  t.cannotWrite(`${COLLECTIONS.PROFILE}/id-123`);
});
```

In this case it is checking if a document can be read. As you can see, the id of the document is irrelevant.

For a more advanced example:

```js
t.canWrite(
  `${COLLECTIONS.UTILISATION_ANALYTICS.FORECASTS}/2020-02/entries/entry-${managedJobId}`, //path
  { jobId: managedJobId, data: "test" }, // data to write
  { scenario: scenarioWithMonth }, // data to seed 
);
```

Here a specific document in a subcollection is being tested. Given variables are provided to write. A scenario is provided which will seed the database for that specific test (Then wiped afterwards).
