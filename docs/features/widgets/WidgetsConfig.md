---
id: config
title: WidgetsConfig
sidebar_label: WidgetsConfig
sidebar_position: 3
last_update:
  date: 2025/10/24
  author: Ijaan Yudana
---

The `WidgetsConfig` is crucial in configuring available widgets, as well as the behaviour of their `WidgetFrame`. There are lots of options, some required and some optional. As widgets have lots of requirements and config options, there are some special design patterns that can be used to cut down on the lines of code in `WidgetsConfig`.

## Base Config

The following are the basic config options available to you:

```js
{
    i: STRING, //id, notated as i for use in react-grid-layout.
    title: STRING, //Title to be displayed in the WidgetFrame
    category: STRING, //The tab the widget is put under in the AvailableWidgets component
    enabled: STRING, //A truthy 'true', 'false' string which decides whether it is shown in AvailableWidgets
    minW: STRING, //The minimum width of the widget in the GridArea.
    minH: STRING, //The minimum height of the widget in the GridArea.
    isUnique: BOOLEAN, //Unique widgets can only have one copy in the GridArea. Non-unique widgets have no cap.
    component: <Component />, //The component rendered in the WidgetFrame
    rbac: [arr], //What roles are required for this widget to show in AvailableWidgets
    actions: [arr], //List of actions to be shown in the WidgetFrame menu
}
```

## Actions

Actions are by far the most complicated part of the `WidgetsConfig`. In general, every action will be rendered in the `menu`. However, you need to use specific `types` for them to perform business logic, or you can use them to change `key-value pairs` in the widget's `local storage` cache.

The following is a guide on how to effectively use them, and on expected best practice.

### Types

#### url

The url type links to internal pages in the dashboard and have several options.

```js
{
    type: 'url',
    key: STRING, // sets a key in the localstorage - in this case it is irrelevant
    label: STRING or FUNCTION, // label shown in the menu, you can use a function to change based on widget data
    url: STRING or FUNCTION, // Url to navigate to upon user action
    rbac: [arr], // Role required to see this action
    desc: STRING, // Text shown in popup on hover
    isVisibleCondition: BOOLEAN or FUNCTION, // Whether this url is shown or not
    icon: COMPONENT, // What mui-icon to show
}
```

###### Advanced

urls can be static, however if a widget spans multiple views/pages, you might one one url action to point to different pages based on the view instead of having multiple url actions and toggling their visibility based on the view.

To this end you can use a function e.g

```js
// In ExampleWidget.js

export const VIEWS = {
    INDEX: { url: ROUTE_EXAMPLE(), OTHER_VALUES }
    DETAIL: { url: (value) => ROUTE_EXAMPLE_DETAIL(value), OTHER_VALUES}
}

// in WidgetsConfig.js

import ExampleWidget, {VIEWS as EXAMPLE_VIEWS} from '../widgets/ExampleWidget

url: (data) => getViewByValue(data?.selectedView, EXAMPLE_VIEWS, EXAMPLE_VIEWS.IDENTITY /** fallback */).url // <-- .url is very important

```

This gets the url by iterating through the `views` in VIEWS, and getting the correct url. You can assign dynamic urls by having its `value` in `VIEWS` be wrapped in a function, and retrieving specific data from the `localstorage`. `WidgetFrame` supports up to 5 nested functions.

#### view

View is used to modify the `selectedView` of the widget, which can be called to change what is rendered in a widget. 

:::info
The following example will also use a common design pattern in `WidgetsConfig`, that is, using values from the `VIEWS` enum in a widget to decide the values. This allows you to edit and refer to specific values without having to constantly shift back to `WidgetsConfig`.
:::

```js
// In ExampleWidget.js

export const VIEWS = {
    INDEXA: { label: 'Red Examples', value: 'RED'}
    INDEXB: { label: 'Blue Examples', value: 'BLUE'}
}

// in WidgetsConfig.js

import ExampleWidget, {VIEWS as EXAMPLE_VIEWS} from '../widgets/ExampleWidget


{
    type: 'view',
    key: STRING, // sets a key in the localstorage - This is useful if you want to use it as a filter in the widget
    label: EXAMPLE_VIEWS.INDEXA.label || STRING,
    value: EXAMPLE_VIEWS.INDEXA.value || STRING,
    rbac: [arr],
    desc: `View ${EXAMPLE_VIEWS.INDEXA.label}`,
    isDefault: true, // This will be selectedView by default
    isVisibleCondition: BOOLEAN or FUNCTION
},
```

#### divider

It just shows a horizontal line. Useful for formatting.

```js
{
    type: 'divider',
    isVisibleCondition: BOOLEAN or FUNCTION,
},
```

### Other

Any other type has no special functionality. However, it will assign a `key value pair` to the `local storage`. This lets you pull of some tricks.

```js
// In ExampleWidget.js

export const VIEWS = {
    INDEXA: { label: 'Red Examples', value: 'RED'}
    DETAIL: { label: 'Specific Example', value: 'RED_DETAIL'}
}

// in WidgetsConfig.js

import ExampleWidget, {VIEWS as EXAMPLE_VIEWS} from '../widgets/ExampleWidget

{
    type:'button', //The name doesn't matter, this simply describes what it is intended to do
    key:'selectedView', //overrides selectedView key
    value:EXAMPLE_VIEWS.INDEXA.value,
    label:'Back',
    isVisibleCondition: (data) => data?.selectedView !== EXAMPLE_VIEWS.INDEXA.value
    desc:`Go to ${EXAMPLE_VIEWS.INDEXA.label}`
}
```

This can be used to override the `selectedView`, thus allowing for an arbitrary action to navigate the view back to `INDEXA`. This action is also only visible if the user is not in the `INDEXA` view.

### Tips

#### isVisibleCondition

This can either be a `boolean` or a `function` that returns a `boolean`. Oftentimes, you only want an action to be visible under certain conditions, and this is the prop to make that happen.

##### example:

```js
{
    isVisibleCondition: (data) => data?.selectedView !== 'Index'
}
```
