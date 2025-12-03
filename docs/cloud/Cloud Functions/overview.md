---
id: cf-overview
title: Overview
sidebar_label: Overview
sidebar_position: 1
last_update:
  date: 2025/12/04
  author: Ijaan Yudana
---

Cloud functions v1 are highly flexible processes that can be run on GCP without dockerisation. A key advantage is that they can use features such as firestore triggers, and have a much easier time using the GCP pub/sub system. It can also run on 256MB of RAM instead of the 512MB required by cloud services.

When adding a cloud function make sure to export it to an index.group so that it can run properly.

