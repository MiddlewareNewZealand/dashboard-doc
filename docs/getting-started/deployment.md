---
id: deployment
title: Deployment
sidebar_label: Deployment
sidebar_position: 4
last_update:
    date: 11/08/2025
    author: Ijaan Yudana
---

# Deployment

Deploying to non-prod is super easy. Ensure that your distDir arg in next.config.js is uncommented

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

:::warning
It is best to merge your approved changes to master and deploy from the master branch. Deploying from
your local branch can cause changes to be overwritten.
:::
