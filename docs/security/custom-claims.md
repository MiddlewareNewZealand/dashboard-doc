---
id: custom-claims
title: Custom Claims
sidebar_label: Custom Claims
sidebar_position: 3
last_update:
  date: 2025/08/13
  author: Ijaan Yudana
---

# Custom Claims

[Official Documentation](https://firebase.google.com/docs/auth/admin/custom-claims)

Google custom claims is a convenient way to establish roles on a firebaseapp. This is in part because it is conveniently accessible throughout the techstack due to its tight integration with googles system. A prime example being how it piggy backs off firebase-auth, meaning that it is simple to check and edit custom claims for any authenticated user.

# Secure Use of Custom Claims

Before starting on technical implementation, it is imperative to keep two things in mind. 

On the `client` side, `custom claims` is **only** useful for `user experience` and is **not** secure, it **can** be bypassed. That is, it is useful for ensuring that users don't get confused when say clicking a `button` their `role` isn't allowed to interact with doesn't work. Always assume that the user can bypass any `UI` `hidden` on the `client` and directly send information to the `firebaseSDK`.

On the `cloud` side, **only** trust firebase's copy of `custom claims` and **never** trust the user provided data. This is available via the firebase `adminSDK`. The actual `security` that `custom claims` provides is in establishing `security rules`. These `filter` user read/write access based on firebases' stored `custom claims`. 

By combining both you gain the `user experience` benefits in the client, and the `security` benefits on the cloud. A user should not be able to access `features` their role isn't permitted to via the `UI`. If they do, the `UI` should warn them they lack access. If they try to access or alter the `data` anyways, it should fail as their role(s) lack the `read`/`write` access to that feature.

# Overview

# Links




