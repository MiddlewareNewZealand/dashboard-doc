---
id: tips
title: Tips
sidebar_label: Tips
sidebar_position: 5
last_update:
  date: 2025/10/09
  author: Ijaan Yudana
---

# Overview

## Utilities

There is a utilities.js file. Look in there for functions such as `getInitials` or `date conversions`. If you have a small function that you find yourself using across several `components` consider adding it to utilities!

## Code tips

### Props

There are several ways to format props that are used in this program, in general, follow whatever existing components you are interacting with use.

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
return <Component {... Props}>

// in the component the props have to be named the same thing

const Component = ({x, y, z, w}) = (<React.Fragment/>)

// you can rename or just append if you need different values or it makes more sense

<Component x={x} y={y} z={q} w={j} />

// can be:

<Component {...{x, y, z:q}} w={j} /> //All options are combined for examples sake

// some components may require

<Component props={{x,y,z}} />

// you can also add values in the shorthand form

<Component x={x} y={y} z={q} w={'foo'} />

// can be:

<Component {...{x, y, z:q, w:'foo'}}>
```

### Const or Function

## Common pitfalls

React uses a lot of shorthand that can be confusing. Here's some answers to some issues you may face:

### Implicit returns

```js
const x = () => (<Component />) // this will return a Component
const y = () => {return <Component>} //this requires a return to return a component
```

### Event handlers

```js
// if handleClick is a function e.g function handleClick(){}

<Button onClick={handleClick()} /> // this will run handleClick() on component init likely crashing the app
<Button onClick={() => handleClick()} /> // this will not run handleClick on component init.

// if handleClick is a const e.g const handleClick()=>{}

<Button onClick={handleClick}> //this is enough if handleClilck is a const
```

Note that this is mostly for interactive functions. You may want a function to run on init:

```js
items.map((item, index)=>{
    <Tabs key={index} /> // This will not render
})
```
