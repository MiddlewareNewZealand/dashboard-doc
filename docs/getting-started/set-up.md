---
id: set-up
title: Set Up
sidebar_label: Set Up
sidebar_position: 2
last_update:
    date: 2026/03/24
    author: Ijaan Yudana
---

# Setting up the repo on your local machine

:::tip
Please ensure that you have the correct permissions to access the github page. If you need `admin` roles, please have a current `admin` or `superadmin` assign it to you via the `/rbac` page.

It can take a bit for the users to load on the page. This page also has to be manually typed in, there is no button.
:::

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
npm run start:nonprod
```

:::warning
```npm run start``` connects to the prod database, please do not use this.
:::

:::info
    You may encounter a **firebase permission error** pop-upn from the next.js dev overlay on launch

    But don't worry, you can click away to dismiss the modal, then log in to google for authentication. 
    This occurs because the dashboard tries to contact firebase before authentication is established. Next.js is just creating a modal of the console error.
:::
