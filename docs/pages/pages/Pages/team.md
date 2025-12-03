---
id: team
title: Team
sidebar_label: Team
sidebar_position: 2
last_update:
    date: 2025/09/22
    author: Ijaan Yudana
---

## Overview

Team shows a list of team members, filterable by their office (Which is associated with their `city`)

## Office Calculation

The three offices are `Wellington`, `Auckland`, and `Christchurch`. However, the `city` field is not bound to only be these three cases. 

`CITY_CONFIG` exists to associate terms to these offices. e.g 

```json
WELLINGTON: {
    main: 'Wellington',
    sub: [
        'Upper Hutt',
        'Lower Hutt',
        //...
    ]
}
```

`Upper Hutt` and `Lower Hutt` in this case, are counted as `Wellington`. This logic is executed by the `filterProfilesByCity` function. 

:::info
You can also use this to handle typos and edge cases. e.g 'Wellington,' The comma there is an error. Of course, you could have more robust error handling, but it is very rare, fixable on the ipayroll side, and frankly not worth running .includes() on every user.
:::

 Not only can it be `null`, the user could also be `remote`. The `Other` tab handles these edge cases. 