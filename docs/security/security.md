---
id: security
title: Security
sidebar_label: Security
sidebar_position: 1
last_update:
  date: 2026/02/10
  author: Ijaan Yudana
---

# Security

The dashboard uses a Role Based Access Control (RBAC) system to secure access to the dashboard and its data. This is done in 3 main layers.

## Custom Claims

This is where the exact `RBAC` settings for each user is defined. These are controlled by a `cloud function` that can be controlled via `CLI commands` or the `/rbac` page on the dashboard.

## Firestore Rules

This uses variables such as the firebase `custom claims`, authenticated user `email` and `auth` status to determine access to firestore data. 

## Claim Manager/Provider

This layer is different in that it provides **no real security**. It is there for `user experience` (i.e hide functions that users cannot use) and defining how data is fetched from firestore (to `prevent invalid requests`). In short, it is there to `maintain smooth operations` of the dashboard for all users. Always assume that the claim manager/provider can be bypassed, the **rules and custom claims are the real security**.
