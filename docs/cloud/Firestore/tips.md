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
- `File 2`
- `File 3`

#### request:

Get all data

#### result:

Request fails as request attempts to retrieve `File 1`

#### solution:

Either construct the request in a way that avoids `File 1`. Here are some options:

- Check params e.g email, id
- Create a `sub-collection` to store granularly protected data, these requests are allowed to fail
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
