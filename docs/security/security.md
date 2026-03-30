---
id: security
title: Security
sidebar_label: Security
sidebar_position: 1
last_update:
  date: 2026/03/31
  author: Ijaan Yudana
---

# Security

The dashboard uses a Role Based Access Control (RBAC) system to secure access to the dashboard and its data. Custom claims are largely managed locally via the dashboard's `/rbac` page (Which must be accessed via typing in the URL). There is no synchronisation with other services for this purpose. This is done in 3 main layers.

## Custom Claims

This is where the exact `RBAC` settings for each user is defined. These are controlled by a `cloud service` that can be controlled via `CLI commands` or the `/rbac` page on the dashboard.

## Firestore Rules

This uses variables such as the firebase `custom claims`, authenticated user `email` and `auth` status to determine access to firestore collection data via the dashboard. This is set in `firestore.rules`.

## Claim Manager

This layer is different in that it provides **no real security**. It is there for `user experience` (i.e hide functions and pages that users cannot use) and defining how data is fetched from firestore (to `prevent invalid requests`). It does this via retrieving the user's custom claims in the front-end, these claims can then be checked across the dashboard to hide components, redirect users, or show alternative components. In short, it is there to `maintain smooth operations` of the dashboard for all users. Always assume that the claim manager can be bypassed, the **firestore rules are the real security**.
