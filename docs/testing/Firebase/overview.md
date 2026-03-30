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

This is `vitest` test that checks that every firestore rule is acting as intended. The user will attempt every `operation` a user can make in every `collection` and `sub-collection` (get, list, create, update, delete) as every role. Certain `operations` will require a `scenario` and/or ownership_pattern (Seeded data for dynamic rules) to be tested properly.

The roles, users, collections, operations, scenarios, sub-collections, ownership_patterns, and collection/subcollection_scenario assignments are defined in `firestore-test-consts`.

The permissions that each role has for every relevant collection is defined in `firestore-test-permissions`. If not defined, it will default to `NO_ACCESS`. This ownership can be defined as a simple list [READ, CREATE, ...etc] or in more detail [{action:GET, ownership:EMAIL}]. If not defined, it is treated as a `NO_ACCESS` `operation`.


