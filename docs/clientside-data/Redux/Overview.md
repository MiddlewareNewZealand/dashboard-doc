---
id: clientside-data-overview
title: Overview
sidebar_label: Overview
sidebar_position: 1
last_update:
  date: 2025/12/3
  author: Ijaan Yudana
---

This section deals with how external data is retrieved, stored and accessed in the front end.

The following is a diagram on how to properly retrieve data from external sources:

```mermaid
graph TD;
    A[UI Component] --Calls function provided by--> B[Container];
    B --Returns Data and handles side effects--> A;

    B --Calls function provided by-->C[Hook];
    C --Returns data, loading, and error states--> B;

    C --Calls--> D[Redux Action];
    D --Calls--> E[Redux Epic];
    E --Calls--> F[Redux Api];
    F --Calls--> G[External Source];

    G --Returns response-->F;
    F --Returns response--> E;
    E --Handles response--> R[Redux Reducer];
    R --Sets redux cache state, data + loading/error states--> cache[Redux Cache];
    cache --Retrieves state from cache--> selector[Redux Selector];
    selector --Returns data, error, loading states--> C;
```

The next documents will detail each leg of the redux journey.