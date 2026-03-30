---
id: app
title: _app
sidebar_label: _app
sidebar_position: 5
last_update:
  date: 2026/03/31
  author: Ijaan Yudana
---

# Overview

_app is the first thing that the user interacts with when accessing the dashboard. 

- It should not send any redux requests to firestore before authenticating via the login page. 

- It initialises an authManager that:
    - Rejects all non `@middleware.co.nz` requests.
    - Rejects all unverified users.
    - Sends rejected users to login page (Users are checked on each redirect)

- The `claim manager` is initialised on full render (i.e the user is verified and logged in). It will create a `provider` for the `ClaimContext`, allowing for the front-end to dynamically change based on the user's custom claims.

- In test mode, all firebase requests are pointed to the local emulator.
