---
id: dev-tool
title: Dev Tool
sidebar_label: Dev Tool
sidebar_position: 2
last_update:
  date: 2026/03/30
  author: Ijaan Yudana
---

This tool is used to conveniently interface with the firestore emulator for testing purposes. It can be launched via:

```
npm run firebase-dev-tools
```

It should automatically start the emulator on launch. From here, you can type commands to manipulate the emulator.

It is useful because it avoids forcing the dev to reconfigure their gcloud tool to point towards the emulator. And also gives the dev 
seed data to work with.

## Commands

### seed

Seeds the data with artificial test data. You can find this data under the `data` directory.

### clear

Clears firestore

### pubsub -topic:AN_TOPIC -data:DATA

Publishes a subscription to the emulator for a given topic, with a provided message (data param auto-formats the json message). Useful
for testing triggers.

```
data format: {'foo', 'bar'}
```


### export COLLECTION

Exports collection data to the `exports` directory. Useful for data analysis.

### close, q, wq, exit, quit

Closes tool


