---
id: cloud-profiles
title: Profiles
sidebar_label: Profiles
sidebar_position: 1
last_update:
  date: 11/08/2025
  author: Ijaan Yudana
---

# Profiles

This page serves as a center to centralise information on how cloud functions sync to the [profiles collection in firestore](../../firestore/Collections/profile.mdx).

## Data provided by ipayroll

 - `ipayrollId`
 - `title`
 - `startDate`
 - `email`
 - `mobile` (acquired from 'phone' field in API)
 - `displayName` (firstnames[0]+lastname)
 - `birthDate`

## Topics synced to profiles

[`ipayroll`](../Topics/ipayroll.mdx)
[`workflowmax`](../Topics/workflow-max.md)


