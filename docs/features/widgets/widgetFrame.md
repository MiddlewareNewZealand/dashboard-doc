---
id: widgetframe
title: Widget Frame
sidebar_label: Widget Frame
sidebar_position: 2
last_update:
  date: 2025/09/30
  author: Ijaan Yudana
---

# Overview

`WidgetFrame` is a component that holds the content of a `widget component`. It is wrapped in a `WidgetProvider` which allows for a `widget component` to pass up values.

:::warning
Beware of using components used in non-widget situations as attempting to use a `WidgetProvider` outside of its context will cause issues. A good approach is to wrap the re-usable component in a widget only component e.g `LeaveWidget`. If you need to interact with specific sub-components, you can pass values and handle the cases in which they are `undefined`.
:::

## Widget Provider

This provider allows for `widget components` to pass values up to their parent `WidgetFrame`. There are 3 main functions:

### useWidgetDetection

This hook is used to detect the `width` and `height` of a `reference container`. It can also detect whether is it possible to scroll down in the case that the container is able to via the `canScroll` prop.

#### Usage in widget:

```js
const ref = useRef(null);
useWidgetDetection(ref, [dependencies]); //<-- dependencies, defaults to []. Used for calculating canscroll.
const { width, height } = useWidgetContext(); //<-- get the width of the container

return (
  <Box ref={ref} sx={{ overflowY: "auto" }}>
    {width}
  </Box>
); // will show the width of the container
```

#### Usage in WidgetFrame:

```js
const { width, height, canScroll } = useWidgetContext(); // use these values as needed.
```

:::info
This is useful as it allows for you to track the dimensions of specific sub-components, rather than the widget as a whole. e.g oftentimes, only part of the widget content will scroll.
:::

### useWidgetData

This is used to send arbitrary data to the `WidgetFrame`

#### Usage in widget:

```js
const { sendData } = useWidgetContext();

useEffect(() => {
  sendData("foo-length", foo.length);
}, [foo.length]); 
```

#### Usage in widgetFrame

```js
const { data } = useWidgetContext(); //retrieves the data value
```

:::info
You can also save this data to local storage `MWNZ/DashboardWidgetData`. This is currently done at the `WidgetFrame` level via `saveData`
:::

#### WidgetComponentRenderer

This is can be used to render any arbitary react component in the `WidgetFrame`. It currently uses the `title` as its `relative` reference point. 

:::tip
For best effect use
```js
position:'absolute'
```
:::

### Config

Everything is configurable via the `WidgetConfig`. `actions` will be rendered in order in a popout `menu`, and can be hidden based on `rbac`. You can add unique functionality via the `type` (e.g add functions, links, values, rendering etc.)

### Other features

- If `canScroll` show a downwards chevron to indicate that there is more content.
- Menu popout configurable via `actions`.
- `Close` is triggered from the `WidgetFrame`, calling `onRemove` from the `GridArea` level.



