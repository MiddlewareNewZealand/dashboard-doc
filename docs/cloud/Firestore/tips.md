---
id: tips
title: Tips
sidebar_label: Tips
sidebar_position: 3
last_update:
  date: 2025/09/24
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

Either construct the request in a way that avoids `File 1` e.g check emails etc or create a `sub-collection` to store granularly protected data, these requests are allowed to fail (see travelplans)

