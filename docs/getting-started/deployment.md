---
id: deployment
title: Deployment
sidebar_label: Deployment
sidebar_position: 4
last_update:
    date: 2026/03/12
    author: Ijaan Yudana
---

## **READ THE README**

## Non-Prod

Deploying to non-prod is easy. Ensure that your `distDir arg` in `next.config.js` is uncommented

```
  },
  eslint: { ignoreDuringBuilds: true },
  output: 'export',
  //distDir: 'dist', // for deploying to non-prod
};
```

then in your console simply run

```console
npm run deploy:nonprod
```

:::danger
Remember to re-comment it (or simply remove it from the change history)
:::

:::tip
If you mess this up you can remove the new logs/changes to .env from the change history to try again.
:::

:::tip
You can use `npm run build` to check if it will deploy, but this isn't always reliable (Sometimes your global node.js version differs)
:::

:::warning
It is best to merge your approved changes to master and deploy from the master branch. Deploying from
your local branch can cause changes to be overwritten.
:::

:::danger 
Run `firebase functions:config:set project.id=mwnz-dashboard-nonprod` to set up functions for nonprod if you have previously set the function to deploy to prod.
:::

## Prod

The prod deployment process is much more involved. Here is a general checklist:

### Pre-deployment

- [ ] Run es-lint to ensure all style guides have been followed. (You can write in exceptions as comments if they are required) This includes:
- - console.log() in the front-end
- - Unused declarations
- - Commented out code
- [ ] Go over every affected page and ensure that there are no relevant bugs, warnings, errors, UI issues, and cloud function issues.
- [ ] Ensure that the app can deploy via `npm run build` 
:::danger
- Ensure that you don't have a global version of node overriding the package
:::
- [ ] Ensure that cloud function URLs and other code can function on prod (e.g URLs will be different - see `env.prod.js` for how this is important, some specifics will be different)

### Deployment

- [ ] Make a pull request
- [ ] Migrate firestore relevant collections and firebase buckets
- [ ] Deploy cloud (run) functions
- - Note that the functions:config:set project.id should correctly point to dashboard-262522 (prod)
- [ ] Deploy frontend to prod

