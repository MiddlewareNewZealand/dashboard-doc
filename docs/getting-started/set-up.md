---
id: set-up
title: Set Up
sidebar_label: Set Up
sidebar_position: 2
last_update:
    date: 2026/03/12
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
npm start:nonprod
```

:::info
    You may encounter a **firebase permission error** pop-upn from the next.js dev overlay on launch

    But don't worry, you can click away to dismiss the modal, then log in to google for authentication. 
    This occurs because the dashboard tries to contact firebase before authentication is established. Next.js is just creating a modal of the console error.
:::
