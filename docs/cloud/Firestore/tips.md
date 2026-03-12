---
id: tips
title: Tips
sidebar_label: Tips
sidebar_position: 3
last_update:
  date: 2025/12/16
  author: Ijaan Yudana
---

### If you make a request to a collection that violates the firestore rules, the entire request will fail

e.g

#### data:

- `File 1` - protected
- - `email`: `other email`
- `File 2`
- - `email`: `your email`
- `File 3`
- - `email`: `your email`

#### request:

List data where `email`==`your email`

:::danger
Any .where() statement WILL count as a list request.
:::

#### result:

Request fails as request checks whether `File 1` has a matching email. This counts as a `get` request to a document you are not permitted to view.

#### solution:

Either construct the request in a way that avoids `File 1`. Here are some options:

- Build all `doc ids` you could potentially have access to and perform single queries in a loop (NO WHERE STATEMENTS). This must handle
the query failing, as not all these docs will exist (Or they might).

#### In the case where files are granularly protected i.e only certain users can view the full document

- Create a `sub-collection` to store granularly protected data, these requests are allowed to fail.
- Connect data in another collection via a `shared key` e.g collectionA and collectionB have a document that shares the same doc id. This is done in travelplans, example:

```
COLLECTION_A = {
  ID_X:{
    param1: FOO
  }
}

COLLECTION_B = {
  ID_X:{
    param2: BAR
  }
}

const docA = COLLECTION_A[ID_X]
const docB = COLLECTION_B[ID_X]

const COMPLETE_DOCUMENT = {param1:docA.param1, param2:docB.param2}
```
