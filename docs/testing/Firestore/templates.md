---
id: templates
title: templates
sidebar_label: templates
sidebar_position: 4
last_update:
  date: 2026/02/11
  author: Ijaan Yudana
---

This class is initialised per `role test group` with the appropriate `context` for that role and the `top level seeder` function.

## \_runWithScenario

Each test is wrapped in `_runWithScenario` which will run the `seeder` with a given `scenario` (The data required for the firestore rule to work)

- If none are provided, it will run without `seeding`.
- The database is `cleared` after every run, and before every `scenario`. This ensured a clean slate for each test.

## Test function

Test functions can take a `path`, `data object`, and `options` (A `scenario` and `description`).

```js
  canWrite(path, data = { data: 'test' }, options = {}) {
    const { scenario = null, description = 'can write document' } = options;
    this._runWithScenario(description, scenario, async () => {
      await assertSucceeds(this.getDb().doc(path).set(data));
    });
  }
```

As you can see, this standarises the description for each test, though it can be overridden.

]