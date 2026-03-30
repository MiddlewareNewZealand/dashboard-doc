---
id: overview
title: System Overview
sidebar_label: System Overview
sidebar_position: 1
last_update:
  date: 2026/03/30
  author: Ijaan Yudana
---

Run via `npm run test`. Can use `vitest run tests/firestore` to run only this test

:::warning
TODO: `firestore-test-config.js` has no references and is a duplicate of `firestore-test-consts`. This should be removed.
:::

:::warning
This needs to be updated everytime the firestore rules are updated.
:::

This is `vitest` test that checks that every firestore rule is acting as intended. The user will attempt every `operation` a user can make in every `collection` and `sub-collection` (get, list, create, update, delete) as every role. Certain `operations` will require a `scenario` and/or ownership_pattern (Seeded data for dynamic rules) to be tested properly.

### firestore-test-consts
Defines the roles, users, collections, operations, scenarios, sub-collections, ownership_patterns, and collection/subcollection_scenario assignments.

### firestore-test-permissions
Where the permissions for each role are defined. If not defined, it will default to `NO_ACCESS`. This ownership can be defined as a simple list [READ, CREATE, ...etc] or in more detail [{action:GET, ownership:EMAIL}]. If not defined, it is treated as a `NO_ACCESS` `operation`.

### firestore-test-seeders
Where the special seeders for given `scenarios` are defined. By default it uses the `Generic` seeder which creates a document in the collection to test `update` and `delete` operations. You can create a new class of seeder that`extends` the `BaseSeeder` (Like the `generic` seeder) to set specific documents for each operation. If not defined, it will use the default seeders. You can define what seeder is assigned to what scenario in the `this._seeder` field.

:::note
This could probably be cleaned up - especially how the seeder-scenarios links are defined.
:::


