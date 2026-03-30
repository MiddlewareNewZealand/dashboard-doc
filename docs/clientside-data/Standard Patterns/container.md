---
id: sp-container
title: Container
sidebar_label: Container
sidebar_position: 3
last_update:
  date: 2026/03/30
  author: Ijaan Yudana
---

Containers are used to call hooks with given params and handle the loading/error side effects. Logic from the hook can be done in the container if simple enough.

If the container is solely used to handle side effects, rbac can be checked in the hook. If the container is where the business logic is at, it can be checked at this level.

```js
const Container = ({ Layout, Props }) => {
  const { prop1, prop2 } = Props;

  // Role could be checked here, in this example it is handled in the hook

  const { prop3, prop4, loading, error, isPermitted } = useHook({
    prop1,
    prop2,
  });

  if (!isPermitted) return <NoPermissionsCard />; // Importable

  if (error) return <Error message={error.message} />; // Import @/Components/Error

  if (loading) return <Loader />; // Import @/Components/Loader

  // Hydrate layout with props
  return <Layout {...{ prop1, prop2, prop3, prop4 }} />;
};

export default Container;
```
