---
id: tips
title: Tips
sidebar_label: Tips
sidebar_position: 5
last_update:
    date: 2025/11/01
    author: Ijaan Yudana
---

# Overview

## Utilities

There is a utilities.js file. Look in there for functions such as `getInitials` or `date conversions`. If you have a small function that you find yourself using across several `components` consider adding it to utilities!

## Code tips

Prop passing shortcuts
```js
<Component 
    x={x}
    y={y}
    z={z}
    w={w} />
// can instead be
<Component {...{x, y, z, w}} />

// or 

Props={x, y, z, w}
return <Component {Props}>

// in the component the props have to be named the same thing

const Component = ({x, y, z, w}) = (<React.Fragment/>)

// you can rename or just append if you need different values or it makes more sense

<Component x={x} y={y} z={q} w={j} />

// can be:

<Component {...{x, y, q:z}} w={j} /> //All options are combined for examples sake
```

