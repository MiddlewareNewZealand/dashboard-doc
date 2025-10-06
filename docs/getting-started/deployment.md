---
id: deployment
title: Deployment
sidebar_label: Deployment
sidebar_position: 4
last_update:
    date: 11/08/2025
    author: Ijaan Yudana
---

# Non-Prod

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

And remember to re-comment it (or simply remove it from the change history)

:::tip
If you mess this up you can remove the new logs/changes to .env from the change history to try again.
:::

:::tip
You can use `npm run build` to check if it will deploy, but this isn't always reliable.
:::

:::warning
It is best to merge your approved changes to master and deploy from the master branch. Deploying from
your local branch can cause changes to be overwritten.
:::

# Prod

The prod deployment process is much more involved.