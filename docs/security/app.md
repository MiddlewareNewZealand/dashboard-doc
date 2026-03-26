---
id: app
title: _app
sidebar_label: _app
sidebar_position: 5
last_update:
  date: 2026/02/10
  author: Ijaan Yudana
---

# Overview

_app is the first thing that the user interacts with when accessing the dashboard. 

- It should not send any redux requests to firestore before authenticating via the login page. 

- It should reject all non `@middleware.co.nz` requests.

- This is also the layer where the front end `claim manager` is. Allowing for the front-end to dynamically change based on the custom claims in the user's jwt token.
