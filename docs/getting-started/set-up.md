---
id: set-up
title: Set Up
sidebar_label: Set Up
sidebar_position: 2
last_update:
    date: 08/08/2025
    author: Ijaan Yudana
---

# Setting up the repo on your local machine

## Clone and pull 

### [Dashboard github repo](https://github.com/MiddlewareNewZealand/dashboard)

### Via console

```console
# Clone your repo from an appropriate dir (e.g documents)
git clone <REPO_HTTPS_URL>
# Follow log-in if prompted
git pull
```

### Via VScode

[Official documentation](https://learn.microsoft.com/en-us/azure/developer/javascript/how-to/with-visual-studio-code/clone-github-repository?tabs=activity-bar)

## Running the dashboard locally

Ensuring that your terminal is in the correct directory (./dashboard)

```console
npm install
npm start
```

:::warning
    You may encounter a **firebase permission error** on launch

    But don't worry, you can click away to dismiss the modal and log in to google for authentication.
    You do still need read AND write permissions. If you don't have the appropriate role, you can give yourself
    write access in the firestore 'roles' collection.
:::
