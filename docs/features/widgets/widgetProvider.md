---
id: provider
title: Widget Provider
sidebar_label: Widget Provider
sidebar_position: 1
last_update:
    date: 2025/10/24
    author: Ijaan Yudana
---

The widget provider is a `context` that wraps each individual `widget`. It is used to pass data within a `widget`. Widget providers cannot affect eachother.

## Hooks

### useWidgetDetection(ref, dependencies)

This is used to initialise the detection of a particular component (e.g it's width, whether it can scroll further).

#### setup

```js
const ref = useRef(null);
useWidgetDetection(ref, []);

return (
    <Box ref={ref} sx={{overflowY:'auto'}}>
        {children}
    </Box>
)
```

:::tip
Dependencies can be an empty array []
:::

### useWidgetProperties()

This is used to access widget properties including those initialised from `useWidgetDetection`

#### Properties

- id
- widget (from config)
- user
- roles
- width
- height
- canScroll

A common application is to use it to hide components based on width:

```js
const { width } = useWidgetProperties();
return (
    <Box>
        <ComponentA />
        {/** Hide componentB if width is smaller than 100 */}
        { width<100 && <ComponentB /> } 
    </Box>
)
```

### useWidgetData()

This is used to maniplate the widget's data held in `localstorage`. You can assign any `value` to any `key` and you don't have to worry about them being unique from other wigets. However note that the `widgetFrame` uses some `key`s that you may overwrite to achieve specific outcomes. 

#### Special keys

##### selectedView

This is set by `actions` of the type `view`, but it is up to you to implement any further functionality within a `widget`

##### customTitle and customSubTitle

If these values are set, it will change the `title` and `subtitle` of the `widgetFrame`. (The subtitle is gray)

:::info
Otherwise, you can assign any arbitrary value here to access it elsewhere in the program. Especially useful for sending up values from child components to change views and keep those changes persistent.
:::

### useWidgetRBAC()

A shortcut to access the user's roles stored in the widget. This is to reduce the amount of times roles are retrieved from the context.

### useWidgetCustomComponent()

This lets you render any `react component` on the `widgetFrame` from a child component. It is anchored to the `title`, thus you must ensure that the component has `relative` positioning.