---
id: overview
title: System Overview
sidebar_label: System Overview
sidebar_position: 1
last_update:
  date: 2026/03/30
  author: Ijaan Yudana
---

This dashboard uses playwright for its e2e testing. It can be launched via the `vscode testing plugin` or `npm run test:e2e`.

From the `vscode testing plugin` or `playwright UI` you can run the `setup` to initialise all user types. (Only required once)

:::important
Before starting the user should launch `npm run firebase:emulators`. This is required as the test environment points all firebase calls towards a local emulator.
:::

:::tip
From here, you can either run automated tests, or poke around as a user. An easy way to do this is to go into the `setup` 'test' and run as a specific user. This should open the dashboard in a browser as this user.
:::

:::tip
Playwright has been configured to run in prod mode by default. If you want to use dev tools in playwright, you can temporarily change the command line in `playwright.config.js` `line 55`.

```js
{..., command: process.env.CI ? 'npm run build && npm run start' : 'npm run start'}

// CHANGE TO

{..., command: 'npm run start:nonprod'}
```
:::

## Data

The dashboard has been pre-seeded with `old dashboard nonprod data`. If you need to change this, you can export a `collection` in firestore to a bucket and load this into the `firebase-seed` directory. 

## Adding a test

Tests are written in the `flows` directory and grouped in `flows.spec.js`. 

In most cases, writing the tests by hand is not required. You can simply create a new `flow` file in the `flows` directory, and use the record tool in the `vscode testing plugin` or `playwright UI` to quickly put some simple tests together. Sometimes some hand written tests are needed, especially when dealing with dynamic data, in which case, keep it as simple as possible so that it's easy to update later.
